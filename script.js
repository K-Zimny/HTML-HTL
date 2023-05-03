//HTML to HTL Converter

///FIXME: Determine how to remove \n characters form array string, or just remove the actual spacing, \n doesnt show up in the string itself.

// Objective: Create a function called htmlToHtl that takes in a string of HTML and returns a string of HTL.

//1. Get the HTML from the user, prompt()?
//2. Create a regex to look for custom properties. How will that work? Based off of the control types and properties from our storybook component.
//3. Use the replace() method to replace the HTML with HTL.
//4. Return the HTL to the user.

// //get html via prompt
// // let html = prompt("Enter HTML");
// let html = `<a
//     data-component="cta"
//     data-type="primary"
//     data-background="army-green"
//     data-state="active"
//     href="www.goarmy.com"
//     class="flex items-center gap-3.5 p-4"
//     data-active="true"
//   >
//     Primary Button
//     <img src="../../public/icons/arrow-right.svg" alt="arrow-right" />
//   </a>`;
// //remove extra spaces
// html = html.replace(/\s\s+/g, " ");
// console.table("html:", html);

// //Select our tags from the html
// const tagMatches = html.match(/<[^>]*>/g);

// console.table("tagMatches:", tagMatches);

// const tagAttributes = tagMatches.map((tag) => {
//   // Remove the ="value" part from the attributes
//   const cleanedTag = tag.replace(/="[^"]*"/g, "");

//   // Remove the element name from the opening tag
//   const tagWithoutElementName = cleanedTag.replace(/<\/*\s*\w+\s*/, "<");

//   const attributes = tagWithoutElementName.match(/[\w-]+/g);
//   console.log("tagWithoutElementName:", tagWithoutElementName);
//   return attributes;
// });

// console.log("tagAttributes:", tagAttributes);

// const tagAttrHtl = tagAttributes.forEach((tagAtt) =>
//   tagAtt.map((tag) => {
//     tag.replace(tag, `test`);
//     console.log("tag:", tag);
//   })
// );

// console.log("tagAttrHtl:", tagAttrHtl);

// let html = `<a
//     data-component="cta"
//     data-type="primary"
//     data-background="army-green"
//     data-state="active"
//     href="www.goarmy.com"
//     class="flex items-center gap-3.5 p-4"
//     data-active="true"
//   >
//     Primary Button
//     <img src="../../public/icons/arrow-right.svg" alt="arrow-right" />
//   </a>`;

// const modifiedHtml = html
//   .replace(
//     /(data-)?(\w+)\s*=\s*"[^"]*"/g,
//     (match, dataPrefix, propertyName) => {
//       dataPrefix = dataPrefix ? dataPrefix : "";
//       return `${dataPrefix}${propertyName}=\${properties.${propertyName}}`;
//     }
//   )
//   .replace(/(?<=<a[^>]*>)[^<>]+(?=<img)/, "${properties.text}");

// console.log(modifiedHtml);
