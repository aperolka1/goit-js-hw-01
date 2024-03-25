function getElementWidth(content, padding, border) {
    const contentSize = parseFloat(content);
    const paddingSize = parseFloat(padding);
    const borderSize = parseFloat(border);
    const totalSize = contentSize + (paddingSize * 2) + (borderSize * 2);
    return totalSize;
}