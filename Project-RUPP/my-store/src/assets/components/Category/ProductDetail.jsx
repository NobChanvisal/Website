import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function ProductDetail({ title, salePrice, brand, gallery }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <section>
      
      <div className=" pt-2">
        <a
          className=" cursor-pointer text-sm underline hover:text-slate-500"
          onClick={handleOpen}
          variant="gradient"
        >
          View Product Details
        </a>
      </div>

      
      <Dialog
        open={open}
        handler={handleOpen}
        size="md"
        className="fixed inset-0 m-0 rounded-none flex items-center justify-center bg-black bg-opacity-50" // Overlay background
      >
        <div className="p-4 bg-white rounded-lg shadow-xl max-w-screen-md w-full">
          {" "}
          {/* Set max width to "md" */}
          <DialogHeader className="text-center p-0 mb-3 justify-between items-start">
            <div className=" flex flex-row mt-3">
              <div className=" max-w-[120px] border">
                <img className=" h-fit w-fit" src={gallery[0]} alt="" />
              </div>
              <div className=" pl-2 text-start">
                <p className=" text-[14px] text-slate-500">{brand}</p>
                <p>{title}</p>
                <p className=" pt-1 text-green-500">
                  ${(salePrice / 100).toFixed(2)}
                </p>
              </div>
            </div>
            <Button className=" p-0" variant="text" onClick={handleOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </Button>
          </DialogHeader>
          <DialogBody className="p-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              feugiat commodo eros. Nam ac efficitur dolor. Curabitur vestibulum
              nunc ac vulputate tincidunt. Vivamus dolor est, venenatis eget dui
              sit amet, lobortis condimentum leo. Praesent eget nunc placerat,
              accumsan ante at, mattis turpis.
            </p>
            <h2 className=" mt-2 mb-1 font-semibold">Benefits</h2>
            <ul className="list-disc list-inside">
              <li>
                From tough stitching to pristine materials to cupsole design,
                these kicks deliver durable style that's smoother than backboard
                glass.
              </li>
              <li>
                Originally designed for performance hoops, Nike Air cushioning
                delivers lasting comfort.
              </li>
              <li>Low-cut, padded collar looks sleek and feels comfortable.</li>
              <li>
                Rubber outsole with our heritage hoops pivot circles adds
                traction and durability.
              </li>
            </ul>
            <h2 className=" mt-2 mb-1 font-semibold">Product Details</h2>
            <ul className=" list-disc list-inside">
              <li>Foam in midsole</li>
              <li>Perforations on toe</li>
              <li>Style: HJ9201-400</li>
            </ul>
          </DialogBody>
        </div>
      </Dialog>
    </section>
  );
}
