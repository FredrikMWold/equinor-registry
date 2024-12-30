import { Button, Icon } from "@equinor/eds-core-react";
import { info_circle, close } from "@equinor/eds-icons";
import { toast } from "sonner";

export const successToast = (text: string) =>
  toast.custom(
    (t) => {
      return (
        <div
          className="flex min-w-96 items-center justify-between gap-2
          rounded bg-text-default p-2 text-text-white shadow-xl"
        >
          <div className="flex items-center gap-2">
            <Icon
              data={info_circle}
              size={24}
              className="aspect-square min-w-6"
            />
            <p>{text}</p>
          </div>
          <Button
            onClick={() => toast.dismiss(t)}
            className="min-w-10"
            variant="ghost_icon"
          >
            <Icon data={close} className="fill-text-white" />
          </Button>
        </div>
      );
    },
    { duration: 5000 }
  );
