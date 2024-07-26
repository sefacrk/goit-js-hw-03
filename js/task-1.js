function slugify(title) {
    const lowerCaseTitle = title.toLowerCase();
    const trimmedTitle = lowerCaseTitle.trim();
    const slug = trimmedTitle
    return title.toLowerCase().split(" ").join("-");
}
