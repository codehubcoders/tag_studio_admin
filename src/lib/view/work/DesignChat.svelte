<script>
	import { onMount } from 'svelte';
	import { Container, Row, Col, Form, Input, Button } from 'sveltestrap';
    
    import SingleChat from './SingleChat.svelte';
    import { chatContent } from '../../store/chatStore.js';
    import chatData from './chatData.json';
 	const privateChats = $chatContent[0].privateChat;

	let activeUser = 0;
	let singleContent = chatData[0].privateChat[activeUser].content;
	let userNames = chatData[0].privateChat[activeUser].userName;
	let singleComponent = true;
</script>

<div class="component-page mb-25">
	<Container fluid>
        <Col lg={12}>
            <div class="chat-area">
    			<div class="chat-content">
					<div class="chat">
						<div class="chat-body bg-white radius-xl">
							<SingleChat {singleContent} {userNames}  />
						</div>
					</div>
				</div>
            </div>
        </Col>
    </Container>
</div>