import { Button, Icon } from "@equinor/eds-core-react";
import { error_filled, close } from "@equinor/eds-icons";
import { toast } from "sonner";

export const errorToast = (text: string) =>
  toast.custom(
    (t) => {
      return (
        <div
          className="flex min-w-96 items-center justify-between gap-2
		  rounded bg-background-warning p-2 text-text-warning"
        >
          <div className="grid grid-cols-[24px_1fr] items-center gap-2">
            <Icon
              data={error_filled}
              size={24}
              className="aspect-square min-w-6"
            />
            <p>{text}</p>
          </div>
          <Button
            color="secondary"
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
