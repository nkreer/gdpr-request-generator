// GDPR text generation script

var requestText = `
Hello,

I hereby request a full copy of the personal data your company processes and stores about myself, as well as the following information:

- the purposes of processing
- the categories of personal data concerned;
- the recipients or categories of recipient to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations;
- where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;
- the existence of the right to request from the controller rectification or erasure of personal data or restriction of processing of personal data concerning the data subject or to object to such processing;
- the right to lodge a complaint with a supervisory authority;
- where the personal data are not collected from the data subject, any available information as to their source;
- the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject.

As this is a request conforming to article 15 of the EU-GDPR, it must be granted for free, within one month time. {{proof}}

Looking forward to your reply!
- {{sender}}
`;

function assembleProofText(proof){
	return "\n\nTo prove that I am who I claim to be, I would like to add that " + proof + ".\n\n";
}

function generate(){
	var text = requestText;
	text = text.replace("{{sender}}", document.getElementById("name").value);
	
	var proof = document.getElementById("proof").value;
	if(proof !== ""){
		text = text.replace("{{proof}}", assembleProofText(proof));
	} else {
		text = text.replace("{{proof}}", "");
	}

	document.getElementById("generatedText").innerHTML = text;
}