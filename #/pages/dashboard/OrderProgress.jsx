import clsx from "clsx";

function OrderProgress(props) {
  const step = props.step || 1;

  return (
    <>
      <div className="w-full">
        <div className="bg-[#F0F1F4] flex items-center rounded-full overflow-hidden">
          {step === 1 && (
            <div
              className={clsx({
                "bg-[#FB7A1A] flex items-center pr-0.5 overflow-hidden": true,
                "rounded-full h-7 w-7": true,
              })}
            >
              <div className="bg-[#FB7A1A] h-7 w-full rounded-full flex items-center justify-end">
                <div className="bg-white h-6 w-6 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FB7A1A]"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div
              className={clsx({
                "bg-[#FB7A1A] flex items-center flex-col pr-0.5 overflow-hidden": true,
                "w-1/2 rounded-r-full": true,
              })}
            >
              <div className="bg-[#FB7A1A] h-7 w-full rounded-full flex items-center justify-end">
                <div className="bg-white h-6 w-6 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FB7A1A]"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <>
              <div
                className={clsx({
                  "bg-[#FB7A1A] flex items-center flex-col pr-0.5 overflow-hidden": true,
                  "w-full rounded-r-full": true,
                })}
              >
                <div className="bg-[#FB7A1A] h-7 w-full rounded-full flex items-center justify-end">
                  <div className="bg-white h-6 w-6 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#FB7A1A]"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default OrderProgress;
