import type { TextlintRuleModule } from "@textlint/types";

const report: TextlintRuleModule = (context) => {
    const { Syntax, RuleError, fixer, report, getSource, locator } = context;
    return {
        [Syntax.Str](node) {
            // "Str" node
            const text = getSource(node); // Get text
            const matches = text.matchAll(/([\p{Letter}\p{M}])(\s)+و\s+([\p{M}\p{Letter}])/gu);
            for (const match of matches) {
                const index = match.index ?? 0;
                const matchRange = [index, index + match[0].length] as const;
                const replace = fixer.replaceTextRange(matchRange, `${match[1]}${match[2]}و${match[3]}`);
                const ruleError = new RuleError("Found isolated waw.", {
                    padding: locator.range(matchRange),
                    fix: replace
                });
                report(node, ruleError);
            }
        }
    };
};

export default {
    linter: report,
    fixer: report
};
