import React, { Component, ReactNode } from "react";
import "../css/splash.css";
interface Props {
  // Define props for the wrapped component if needed
}

interface State {
  loading: boolean;
}

function SplashMessage(): ReactNode {
  return (
    <div className="z-10 bg-black fixed w-lvw h-screen">
      <div className="splash">
        <h1 className="flex flex-col mb-28">
          <span className="word">
            Abhishek Gupta<span className="superscript">a</span>
            <span className="superscript">j</span>
          </span>
        </h1>
      </div>
    </div>
  );
}

function withSplashScreen<T extends Props>(
  WrappedComponent: React.ComponentType<T>
): React.ComponentType<T> {
  return class extends Component<T, State> {
    constructor(props: T) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        // Put here your await requests/ API requests
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 4000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      if (this.state.loading) return SplashMessage();
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
