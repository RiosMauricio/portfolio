import { Component, ErrorInfo, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";
import { LanguageContext, LanguageContextValue } from "@/i18n/languageContext";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class DemoErrorBoundary extends Component<Props, State> {
  static contextType = LanguageContext;
  declare context: LanguageContextValue | null;

  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[DemoErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box py={10} textAlign="center">
          <Text fontFamily="monospace" color="gray.400" fontSize="sm">
            {this.context?.t.demos.error ?? "This demo failed to load."}
          </Text>
        </Box>
      );
    }
    return this.props.children;
  }
}
