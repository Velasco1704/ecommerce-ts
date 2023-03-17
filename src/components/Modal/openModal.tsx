import { Product } from "@interfaces/Products.interface";
import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

export const openModal = (product: Product) => {
  const Modal = lazy(() =>
    import("./index").then(({ Modal }) => ({ default: Modal }))
  );
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense>
      <Modal root={root} product={product} />
    </Suspense>
  );
};
