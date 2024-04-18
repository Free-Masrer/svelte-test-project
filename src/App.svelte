<script>
  import TextInput from './lib/TextInput/TextInput.svelte';
  import ChatDisplay from './lib/ChatDisplay/ChatDisplay.svelte';

  let messages = [
    { text: 'How are you?', timestamp: new Date(Date.now() - 100000), type: 'incoming' },
    { text: 'I am good, thanks!', timestamp: new Date(Date.now() - 50000), type: 'outgoing' },
    { text: 'What do you think about Sunrider?', timestamp: new Date(Date.now() - 10000), type: 'incoming' }
  ];

  function sendMessage(text) {
    const newMessage = {
        text: text,
        timestamp: new Date(),
        type: 'outgoing' 
    };
    messages = [...messages, newMessage];
}
</script>

<main>
  <div>
    <ChatDisplay {messages}/>
  </div>
  <div>
    <TextInput {sendMessage}/>
  </div>
</main>

<style>
  /* Ваши стили */
</style>
