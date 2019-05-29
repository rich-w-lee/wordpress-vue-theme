# Wordpress-Vue-Theme

A starter template for a wordpress theme built on Vue.js

### Audience 

This project is aimed for developers looking to create a wordpress theme with the full capability of javascript and little of the nonsense of PHP.

### Background

While developing websites, I've found that many clients want something to manage their data easy to set up and that's easy to update. Simply put, they want a Wordpress site. While Wordpress is a powerful and popular CMS, it's not that easy to develop on. Let's face it, nobody's favorite language is PHP. So what about using Vue with Wordpress? That's exactly what this project aims at doing. 

### Features
- Vue.js
- Vue Router (SPA Routing)
- Vuex (State Management)
- Axios (HTTP)
- Eslint (Linting)
- Babel 7 (Transpiling)
- Webpack 4 (Code Bundle)
- Jest (Unit Testing)

### Included Plugins
- [Advanced Custom Fields](https://www.advancedcustomfields.com/) (ACF) Wordpress Plug-in
- [Advanced Custom Fields to Rest API](https://github.com/airesvsg/acf-to-rest-api) Wordpress Plug-in

### Advanced Custom Fields
ACF is used to manage the data that is used for the theme. I first used the native custom fields of Wordpress, but have sinc upgraded to ACF. It is much easier to manage and more powerful. 

I've implemented a feature where you can preset the fields for a theme. Those fields are stored in the file `acf_fields.json`. See the section below that goes into more detail on this.

I've also disabled the ACF Admin menu for clients so they can't mess with anything. This can be re-enabled by removing the following line in `functions.php`:
```
add_filter('acf/settings/show_admin', '__return_false');
```

### Accessing the Custom Fields (Theme Data)
ACF to Rest API is used to add the custom fields to the response from the Wordpress REST API. 

When the app is loaded, it makes an API call to the Wordpress REST API to get the posts. Those posts are stored in a Vuex variable `posts`. 

For simplicity, all of the data to be used by the theme will be stored in a single post titled `Theme Data`. There is a Vuex Getter that looks for that specific post and returns the ACF fields that are added to the post.

### Presetting specific fields in ACF
As mentioned above, I've implemented a custom feature that allows you to preset the fields used by ACF using a JSON file. The file is already included with a sample Field Group and Field already included. If you want to edit it, follow the below schema. If you want to remove it, simply delete the file. 

`acf_fields.json` contains an Array of Objects, where each Object is a Field Group. 
In each field group there is a `fields` property, which is also an Array of Objects, where each Object is a field. 
```
[
  {
    "groupName": String,
    "groupKey": String,
    "fields": [
      {
        "fieldLabel": String,
        "fieldKey": String,
        "type": String
      }
    ]
  }
]
```
**Note**: There are preset values that ACF recognizes. Please look at their [documentation](https://www.advancedcustomfields.com/resources/#field-types) for more information.

### Shoutouts

Special thanks to Evan Agee, [your template](https://github.com/EvanAgee/vuejs-wordpress-theme-starter) helped me with this one.

### Learning Vue

If you're interested in Vue, I heavily recommend Maximilian Schwarzmüller's [course on Udemy](https://www.udemy.com/vuejs-2-the-complete-guide/). It's ~$10, but make sure you open it in an incognito browser because it will be "on sale". If you have cookies it will bump it up to ~$200.