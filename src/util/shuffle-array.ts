export const shuffle = <T>(array: T[]) => {
  /**
   * @see {@link https://en.wikipedia.org/wiki/Fisher–Yates_shuffle}
   * @see {@link https://stackoverflow.com/a/2450976}
   */

  let currentIndex: number = array.length;
  let randomIndex: number;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap element at currentIndex with element at randomIndex
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
