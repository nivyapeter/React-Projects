import React from "react";
import Button from "./Button";

function WhiteCard({
  text,
  title,
  subTitle,
  btnText,
  whiteClassName,
  className,
  status,
}) {
  return (
    <div>
      <div
        className={`cursor-pointer shadow-xl p-7 bg-white text-white ${whiteClassName}`}
      >
        <h2 className="opacity-75 mb-5 uppercase font-normal leading-snug text-xs ">
          {text}
        </h2>
        <div>
          <h3 className="font-bold text-2xl leading-snug mb-4 ">
            {title}
          </h3>
          <div className="flex flex-row">
          <div className="text-xs leading-normal font-normal">
            <p>{subTitle} </p>
          </div>

          {/*  */}
          {status && (
            <div>
             <svg viewBox="0 0 24 24" width="1em" height="1em" class=" ui-svg-icon" fill="black"><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"></path><path d="M12 11c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zm.9-3.4c0-.1-.1-.1-.1-.2s-.1-.1-.1-.1c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2l-.1.1c0 .1-.1.1-.1.2s0 .1-.1.2V8c0 .3.1.5.3.7.1.1.2.2.3.2.1.1.3.1.4.1h.2c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1l.1-.1c.2-.2.3-.4.3-.7v-.2c0-.1-.1-.1-.1-.2z"></path></svg>
              <div
                id="tooltip-bottom"
                role="tooltip"
                class="inline-block absolute invisible hover:visible hover:opacity-100 z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Tooltip on bottom
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            
          )}
          </div>

          {/*  */}
          <a className="mt-6 text-lg" href="">
            <Button text={btnText} className={className} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhiteCard;
