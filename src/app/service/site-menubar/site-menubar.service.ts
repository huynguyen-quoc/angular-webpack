import { Injectable } from '@angular/core';

export type MENU_ITEM = {
  [key: string]: any
};

@Injectable()
export class SiteMenuBarService {

  private _menuItems: MENU_ITEM[] = [];

  public get menuItems(): MENU_ITEM[] {
    return this._menuItems;
  }

  public set menuItems(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public sort(parent = null) {
    if (!parent) {
        parent = this._menuItems;
        parent.sort(this._byWeight);
    }

    // Sort the children
    for (const child of parent) {
        let children = child.children;

        if ( children.length > 1 ) {
            children.sort(this._byWeight);
        }

        if ( children.length > 0 ) {
            this.sort(children);
        }
    }
  }

  public saveItems(path, value) {
     // value
     if (typeof path !== 'string') {
        throw new Error('path must be a string (eg. `dashboard.project`)');
     }

     let parts = path.split('.');

     // Generate the object id from the parts
     let id = parts[parts.length - 1];

     // Get the parent item from the parts
     let parent = this.findOrCreateParent(parts);

     // Decide if we are going to update or create
     let updateItem = null;

     for (const child of parent) {
        if (child._id === id ) {
            updateItem = value;
            break;
        }
     }

    // Create
     if (updateItem == null) {
        // Create an empty children array in the item
        value.children = [];

        // Add the default weight if not provided or if it's not a number
        if (!value.weight) {
            value.weight = 1;
        }

        // Add the item id
        value._id = id;

        // Add the item path
        value._path = path;

        // Push the item into the array
        parent.push(value);
     }
  }

  private findOrCreateParent(parts) {
        // Store the main navigation
        let parent = this._menuItems;

        // If it's going to be a root item
        // return the navigation itself
        if ( parts.length === 1 ) {
            return parent;
        }

        // Remove the last element from the parts as
        // we don't need that to figure out the parent
        parts.pop();

        // Find and return the parent
        for (const part of parts) {
            let _id = part;
            let createParent = true;

            for (const child of parent) {
                if (child._id === _id ) {
                    parent = child.children;
                    createParent = false;
                    break;
                }
            }

            // If there is no parent found, create one, push
            // it into the current parent and assign it as a
            // new parent
            if ( createParent ) {
                let item = {
                    _id,
                    _path   : parts.join('.'),
                    title   : _id,
                    weight  : 1,
                    children: []
                };

                parent.push(item);
                parent = item.children;
            }
        }

        return parent;
  }

  private  _byWeight(x, y) {
    return parseInt(x.weight, 0) - parseInt(y.weight, 0);
  }
}
