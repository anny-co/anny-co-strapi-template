# anny-co-strapi-template

The bundled Strapi template for anny's shiny new user frontend! Fueled by coffee, Mate Mate, and red wine.

## Usage as a strapi template

```
# Using Yarn
yarn create strapi-app my-instance --template https://github.com/anny-co/anny-co-strapi-template

# Or using the helm chart for strapi
helm install . my-instance --set "strapi.template=https://github.com/anny-co/anny-co-strapi-template" -f ...
```

## "About this continuous integration..."

This repository is like a mirror repository, except it only features the
template-relevant parts of the original (which is a private development
repository). On creation of tags on this private repository, a CI runner bundles
the new changes to the template, and commits them to this repository
automatically, tagging it with the same version as the upstream private
repository and pushing it to this public remote. From here, strapi can pull the
repository as a source for templates.