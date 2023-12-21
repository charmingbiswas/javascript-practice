const asyncFunc = async () => {
  try {
    const result = await fetch(url);
  } catch (e) {
    console.log(e);
  }
};
