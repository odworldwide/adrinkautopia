import { cells } from './grid.js'

function addConversation(sender, receiver, messageType, responseType){

	var senderFeeling = (messageType === 'greeting') ? '' : ` and felt ${messageType}`;
	var receiverFeeling = (responseType === 'greeting') ?  '' : `, and ${receiver.name} felt ${responseType}`;

	sender.narrative = sender.narrative + `${sender.name} spoke to ${receiver.name}${senderFeeling}. 
	It said "${sender.speech[sender.speech.length-1].message}", and ${receiver.name} replied "${receiver.speech[receiver.speech.length-1].message}". `;

	receiver.narrative = receiver.narrative + `${sender.name} spoke to ${receiver.name}${receiverFeeling}. 
	${sender.name} said "${sender.speech[sender.speech.length-1].message}", and ${receiver.name} replied "${receiver.speech[receiver.speech.length-1].message}". `;
}

function addThought(thinker, thought){
	thinker.thoughts.push(thought);
	thinker.narrative = thinker.narrative + `${thinker.name} thought to itself "${thinker.thoughts[thinker.thoughts.length-1]}". `;
}

function generateNarrative (agent) {
	agent.narrative = `${agent.name} is a ${agent.personality} ${agent.type}. `;
}

export { addConversation, addThought, generateNarrative };