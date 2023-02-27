export function colorizedVariables(phrase) {
    const regex = /:\S\w+/gm;
    let m;
    const matches = []

    while ((m = regex.exec(phrase)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((mm, groupIndex) => {
            matches.push(mm)
        });
    }

    if (matches.length > 0) {
        matches.forEach((match) => {
            phrase = phrase.replaceAll(match, `<span class="text-green-500">${match}</span>`)
        })
    }

    return phrase
}
