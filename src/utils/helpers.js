export const handleError = (from, error) => {
  if (error?.response) {
    console.log("\x1b[33m%s\x1b[0m", `***ERR-1-${from} => ${JSON.stringify(error?.response?.data)}`);
  } else if (error.request) {
    console.log("\x1b[33m%s\x1b[0m", `***ERR-4-${from} - ${error?.request?._url}:`, JSON.stringify(error?.request));
  } else {
    console.log("\x1b[33m%s\x1b[0m", `***ERR-5-${from}`, error?.message);
  }
};
