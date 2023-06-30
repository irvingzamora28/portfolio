import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getFilesSortedByDate = (dirPath: string): FileData[] => {
    const fileNames = fs.readdirSync(dirPath);
    return fileNames
        .map((fileName) => ({
            name: fileName,
            time: fs.statSync(path.join(dirPath, fileName)).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time);
};

export const getFileContent = (filePath: string): string => {
    return fs.readFileSync(filePath, "utf8");
};

export const getBlogMeta = (fileContents: string): BlogMeta | null => {
    const { data } = matter(fileContents);
    if (typeof data !== "undefined") {
        return data as BlogMeta;
    }
    return null;
};

export const getBlogContent = (fileContents: string): string | null => {
    const { content } = matter(fileContents);
    if (typeof content !== "undefined") {
        return content as string;
    }
    return null;
};

export const getBlogContentAndMeta = (fileContents: string): FileContentMeta | null => {
    const { data, content } = matter(fileContents);
    if (typeof content !== "undefined" && typeof data !== "undefined") {
        return {
            content: content,
            data: data as BlogMeta
        };
    }
    return null;
};

export const readBlogsMeta = (
    dirPath: string,
    limit: number = 4
): BlogMeta[] => {
    const latestFiles = getFilesSortedByDate(dirPath).slice(0, limit);
    const blogs: BlogMeta[] = [];
    latestFiles.forEach((file) => {
        const fileContents = getFileContent(path.join(dirPath, file.name));
        const blogMeta = getBlogMeta(fileContents);
        if (blogMeta) {
            blogs.push(blogMeta);
        }
    });
    return blogs;
};

export const readBlogContentAndMeta = (filePath: string): FileContentMeta | null => {
    const fileContents = getFileContent(filePath);
    return getBlogContentAndMeta(fileContents);
};
