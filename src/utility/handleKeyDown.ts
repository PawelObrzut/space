export const handleKeyDown = (
  e: { keyCode: number },
  tab: string,
  tabs: string[],
  setTab: React.Dispatch<React.SetStateAction<string>>
) => {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownRight) {
    const currentIndex = tabs.indexOf(tab);
    const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    setTab(tabs[nextIndex]);
  }

  if (e.keyCode === keydownLeft) {
    const currentIndex = tabs.indexOf(tab);
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    setTab(tabs[nextIndex]);
  }
};