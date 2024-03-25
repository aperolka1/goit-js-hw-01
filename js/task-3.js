function getElementWidth(content, padding, border) {
    const totalSize = content + (padding * 2) + (border * 2);
    return parseFloat(totalSize);
}