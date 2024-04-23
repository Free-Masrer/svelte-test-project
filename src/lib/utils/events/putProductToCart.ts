type ProductEvent = CustomEvent<{
  id: string;
}>;

/**
 * Interface can be redefined in future
 */
export function addProduct(id: string) {
  // This is a dummy message to simulate the case

  const event: ProductEvent = new CustomEvent("addProductToCart", {
    detail: {
      id: id,
    },
  });

  window.document.dispatchEvent(event);
}
