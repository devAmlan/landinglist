import React from "react";
import Template from "./Template";
function page(props) {
  const { params } = props;
  const templateName = params?.templateId;
  return (
    <div className="w-full">
      <Template templateName={templateName} />
    </div>
  );
}

export default page;
