/*
Manage custom components with forwardRefs

A higher-order component called a ForwardRef takes another component as input and outputs a new component that passes
the original component's ref. By doing this, the child component's ref, which can be used to retrieve the underlying
DOM node or component instance, is made accessible to the parent component.

When creating a custom component that interacts with a third-party library or another custom component within your
application, it is highly helpful to include the ForwardRef pattern in your workflow. By granting access to the
library's DOM node or another component's DOM instance, it helps transfer control of such components to you.
*/

// An example of a use case of the forwardRef pattern is shown below:

import React, { useRef, useEffect } from "react";

const CustomInput = React.forwardRef((props, ref) => (
  <input type="text" {...props} ref={ref} />
));

const ParentComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <CustomInput ref={inputRef} />;
};

/*
In the code above, we triggered the focus of another component <CustomInput/> from our component <ParentComponent/>
using forwardRefs.
*/
