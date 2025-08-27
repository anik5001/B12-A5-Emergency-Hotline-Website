1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   ✅answer:
   ⭐getElementById:Finds one element by its unique id and return a element object.

⭐getElementsByClassName:Finds all elements with a given class and return an HTMLCollection.

⭐querySelector:Finds the first element that matches a CSS selector and return a single element.

⭐querySelectorAll :Finds all elements that match a CSS selector and return a NodeList

2. How do you **create and insert a new element into the DOM**?
   ✅answer:
   ⭐first create element=document.createElement("p")
   ⭐ then insert element.innerText=" hello Dom"
   ⭐and last parentNode.appendChild(element);

3. What is **Event Bubbling** and how does it work?
   ✅answer:
   ⭐Event bubbling means that when an event (like a click) happens on an element, it first runs the event handler on that element, and then it bubbles up (propagates) to its parent, then the grandparent, and so on up to the <html> and document.

<!DOCTYPE html>
<html>
<body>
  <div id="parent">
    Parent
    <button id="child">Click Me</button>
  </div>

  <script>
    document.getElementById("child").addEventListener("click", function() {
      console.log("Button clicked!");
    });

    document.getElementById("parent").addEventListener("click", function() {
      console.log("Parent DIV clicked!");
    });

    document.body.addEventListener("click", function() {
      console.log("Body clicked!");
    });
  </script>
</body>
</html>

4. What is **Event Delegation** in JavaScript? Why is it useful?
✅answer:
⭐Event Delegation is a technique where you attach a single event listener to a parent element, and let the event bubble up from its child elements.
Then, inside the handler, you check which child actually triggered the event.
<ul id="menu">
  <li><button class="nav-btn">Home</button></li>
  <li><button class="nav-btn">About</button></li>
  <li><button class="nav-btn">Contact</button></li>
</ul>

<script>
  // Good way: One listener on parent
  document.getElementById("menu").addEventListener("click", function(e) {
    if (e.target.className.includes("nav-btn")) {
      console.log("Button clicked: " + e.target.textContent);
    }
  });
</script>

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   ✅answer:
   ⭐preventDefault() :Prevents the default browser behavior for an event and browser not loading .

⭐stopPropagation():Stops the event from bubbling up (or capturing down) the DOM.
