export interface Review {
  /** Reviewer name as it appears on the Google listing */
  name: string;
  /** Someone else's words, kept exactly as written. Trim with an ellipsis at display time, never rewrite. */
  text: string;
  stars: 1 | 2 | 3 | 4 | 5;
}

export const reviews: Review[] = [
  {
    name: 'Vijay Ganesh',
    text: "My name is vijayganesh 44 years ,I was suffering from lower back ache and left limb pain since 5 months, dr madhavan sir ortho in kanchipuram rani multi speciality clinic -the knee clinic , he listened to me to all my complaints and examined me thoroughly then he examined every thing clearly to my understanding what's happening in my back and why the pain is coming , iam so impressed with sir explanation and dedication on patient care now iam 95 ,% better and able to do my routine activities ,thanks to dr madhavan sir ortho at rani multi speciality , i recommend people suffering from ortho issues to dr madhavan sir qualified ortho doctor",
    stars: 5,
  },
  {
    name: 'Deepika Kumaresan',
    text: 'I have been there once for my asthetic correction of my teeth.. Dr.sudharsan and Dr niranjani explained me very well about the treatment protocol... I will strongly recommend ppl in kanchipuram to go in there for different modalities of treatment.',
    stars: 5,
  },
  {
    name: 'Anbarasu Arjunan',
    text: "I was dealing with persistent ortho bone issues, multiple joint pains for long time, but Dr madhavan sir got right to the root of the problem, he took time to explain and diagnosis clearly and answered all my question and doubts, prescribed medicine it worked wounderfully, and i'm greatful for the treatment and kindness of Dr madhavan, he's so approachable and final solutions for ortho problem now i am living a comfortable life",
    stars: 5,
  },
  {
    name: 'Sivagami',
    text: 'I consulted Dr. P Madhavan (Ortho) for my condition. First i have to mention about his positive energy and the assurance he gave to me. He explained the treatment clearly and did the follow up promptly.',
    stars: 5,
  },
  {
    name: 'Kpm Ranjith',
    text: 'My grand mother had 10 years knee pain , eating pain killers for 10 years , she went to many treatment but not relieved from pain , finally one of my relatives suggested dr madhavan who got surgery in her knees (TKR SURGERY) 1 year back and she suggested so we went and dr madhavan sir explained us the condition well and suggested for TKR surgery for knee arthritis , now 1 month over my grand mother walking without knee pain and thanks to dr madhavan THE KNEE CLINIC ,for ortho related problem a complete end point ☝️, especially for knee problems and knee pain',
    stars: 5,
  },
];
