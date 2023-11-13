const Container = ({ children }) => {
    return (
      <div
        className="container"
        style={{
          maxWidth: "var(--global-max-width)",
          margin: "auto",
          // padding: "0 60px"
        }}
      >
        {children}
      </div>
    );
  };
  
  export default Container;