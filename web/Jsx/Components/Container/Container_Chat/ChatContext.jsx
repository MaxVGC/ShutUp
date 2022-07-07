const ChatContext = React.createContext();

export const ProviderChat = ChatContext.Provider;
export const ConsumerChat = ChatContext.Consumer;

export default ChatContext;