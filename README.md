# Table Component made for ClickUp™

https://clickup-miniproject-filipwiniarski.netlify.app

## Checklist

- [x] Table
  > Since most opensource tables are table layouts I decided to go with flex, which allows for more customization with a slight trade off performance.
- [x] Sorting
- [x] Searching
- [x] Pagination
- [ ] Row drag and drop
  > I noticed column drag and drop pretty late during my development. 
  > Currently table rows are iterating in horizontal fashion therefore drag 
  > and drop animation would have to be really tricky. 
  > Definitely doable but just that is on its own a huge effort - I am talking fully animated column drag and drop just as I did with rows. 
  > Binding body cells to a header drag and drop animation would be really tricky. 
  > I would have to dig way more on that to end up with a proper, optimum solution. 
- [x] NgRx integration
  > I did not implement NgRx inside table module since I wanted it to be as reusable as possible. Using NgRx would force different teams to include NgRx in their codebase. 
  > User interaction with the table and data fetch has been directly implemented inside the application.
- [x] Generic table
  > I also prepared a core package with tree-shakable configuration ready to be uploaded under a private NPM organization.
- [x] API with paging, sorting and searching
  > I was not sure if I am expected to create a proper backend API. I did a trick and created lambda function using Netlify functions that mock this behaviour.
- [x] Styling
  > I did some styling, however those styles could be brought to another level to allow developers for customization using CSS custom properties.
- [x] CI & CD
  > Netlify ❤️
- [x] Column resize
- [x] Performance optimizations
- [x] RxJs
- [x] Pipes, directives and more

## Local Development

To run project locally run:

`yarn install && yarn dev`

This will run project using Netlify Dev feature serving functions alongside Angular project.
Otherwise, you will not have a running API to power project with data.

After you run above command you can access Netlify Dev server on https://localhost:8888.

## Additional features

- Tree-shakable library
- NPM ready library
- Fully typed generic table
- Backend search
- Backend sort
- Both client and server implementations
- Skeleton loading animation (placeholders)
- Custom sort functions  
- Option to disable sort for a specific column
- Responsivity from a large mobile screen to a desktop
- Composite layer animations only
- Disabled zone patch on animation request frame
- OnPush everywhere
- TypeScript strict mode
