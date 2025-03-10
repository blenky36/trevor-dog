import React from "react";

export const General = () => {
  return (
    <div className="md:p-16 p-6" id="general">
      <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
        General Information
      </h1>
      <ul className="list-disc list-inside pl-5">
        <li>I&apos;m a happy dog that loves food and exploring</li>
        <li>
          I&apos;m quite a quiet dog and don&apos;t bark unless I&apos;m cross
          about being ignored
        </li>
        <li>
          I have a sensitive stomach and prefer <b>grain free</b> food and
          treats please
        </li>
        <li>
          On walks make me walk on the left side &amp; sit when crossing the road followed by &apos;walk
          on&apos;. If I pull on the lead stop until it goes slack and then &apos;walk
          on&apos;
        </li>
        <li>If I get overstimulated and really bitey then tell me to go to bed (in my crate) to calm down</li>
        <li>I like to sleep in outstretched legs</li>
        <li>When playing I like to bring a toy to kill in your lap our outstretched legs</li>
        <li>I like to lick hands, particularly after you cook or eat</li>
      </ul>
    </div>
  );
};
