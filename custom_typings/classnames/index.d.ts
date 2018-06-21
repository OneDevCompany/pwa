type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

interface ClassDictionary {
	[id: string]: boolean | undefined | null;
}

// This is the only way I found to break circular references between ClassArray and ClassValue
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
interface ClassArray extends Array<ClassValue> { } // tslint:disable-line no-empty-interface

type ClassNamesFn = (...classes: ClassValue[]) => string;

declare const classNames: ClassNamesFn;

export default classNames;

// export = classNames;
// export as namespace classNames;
