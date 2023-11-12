const Container = ({ children }) => {
    return (
      <div
        className="container"
        style={{
          maxWidth: "var(--global-max-width)",
          margin: "auto",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default Container;