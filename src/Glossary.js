import React, { useState } from "react";

const Glossary = () => {
  const [items] = useState([
    { id: 1, term: "Hello", desc: "World" },
    { id: 2, term: "Hello", desc: "React" },
  ]);
  return (
    <dl>
      {items.map((item) => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.desc}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default Glossary;
