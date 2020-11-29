/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";

import { useClipboard, useToast } from "@chakra-ui/react";

import siteConfig from "site-config";

export function useEmail() {
  const { onCopy } = useClipboard(siteConfig.email);
  const toast = useToast();

  const copyEmail = React.useCallback(() => {
    onCopy();
    toast({
      title: "Copied! ✨",
      description: "Email copied to clipboard.",
      isClosable: true,
      position: "top",
      status: "success",
    });
  }, []);

  return copyEmail;
}
