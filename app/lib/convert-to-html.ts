import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

/**
 * Markdownを安全なHTMLに変換します
 * @param markdown - マークダウン形式の文字列
 * @returns サニタイズされたHTML文字列
 */
export default async function convertToHtml(markdown: string): Promise<string> {
    // マークダウンをHTMLに変換
    const rawHtml = await marked.parse(markdown);

    // XSS対策としてHTMLをサニタイズ（安全なタグと属性のみを許可）
    const safeHtml = sanitizeHtml(rawHtml, {
        allowedTags: [
            ...sanitizeHtml.defaults.allowedTags,
            'h1', 'h2', 'h3', 'img', 'span', 'del'
        ],
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
            a: ['href', 'name', 'target', 'rel']
        },
        // aタグに自動で target="_blank" と rel="noopener noreferrer" を付与する場合の処理などを追加できます
        transformTags: {
            a: sanitizeHtml.simpleTransform('a', { target: '_blank', rel: 'noopener noreferrer' })
        }
    });

    return safeHtml;
}
