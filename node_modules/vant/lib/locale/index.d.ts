declare type Message = Record<string, any>;
declare const Locale: {
    messages(): Message;
    use(newLang: string, newMessages?: Message | undefined): void;
    add(newMessages?: Message): void;
};
export default Locale;
export { Locale };
