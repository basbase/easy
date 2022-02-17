import { Text } from './Text';
export declare type TemplateOptions = {
    type?: Text;
    property?: Text;
    actual?: Text;
};
export declare const template: (tmpl: Text, subject: unknown, options?: TemplateOptions) => Text;
