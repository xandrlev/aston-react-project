import React, { ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    /* eslint-disable no-console*/
    console.error("Error caught:", error, errorInfo);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>Error has been caught</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
