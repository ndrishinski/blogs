...
onCartUpdate() {
  fetch(...)
  .then((responseText) => {
    ...

    const cartEvent = new CustomEvent('cartUpdated');
    document.dispatchEvent(cartEvent);
  })
}

...

updateQuantity() {
  ...

  .then((state) => {
    ... 
    const cartEvent = new CustomEvent('cartUpdated');
     document.dispatchEvent(cartEvent);
    ...
  })
}