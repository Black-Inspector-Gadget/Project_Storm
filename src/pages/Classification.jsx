import { useState } from 'react';
import { Brain, Activity, HelpCircle, AlertCircle, Search, Book, Clock } from 'lucide-react';

const seizureTypes = [
  { name: 'Absence', description: 'An absence seizure causes a short period of "blanking out" or staring into space. Like other kinds of seizures, they are caused by brief abnormal electrical activity in a person’s brain.' },
  { name: 'Atypical Absence', description: 'A type of absence seizure that is atypical (a-TIP-i-kul). This means it’s different, unusual, or not typical compared to typical absence seizures, which were previously called petit mal seizures. They are a type of generalized onset seizure, which means they start in both sides of the brain.' },
  { name: 'Atonic', description: 'Muscle "tone" is the muscle\'s normal tension. "Atonic" (a-TON-ik) means "without tone." So in an atonic seizure, muscles suddenly become limp.' },
  { name: 'Clonic', description: '"Clonus" (KLOH-nus) means fast stiffening and relaxing of a muscle that happens repeatedly. In other words, it is repeated jerking. The movements cannot be stopped by restraining or repositioning the arms or legs. Clonic (KLON-ik) seizures are rare and most commonly occur in babies. Most often, clonic movements are seen as part of a tonic-clonic seizure. Jerking movements alone, as with a clonic seizure, may last a few seconds to a minute. Jerking or clonic movements that follow stiffening of muscles, as in a tonic-clonic seizure, can last seconds to 1-2 minutes. A clonic seizure may sometimes be hard to distinguish from a myoclonic seizure. The jerking is more regular and sustained during a clonic seizure.' },
  { name: 'Dacrystic', description: 'Dacrystic seizures are focal or partial seizures when a person makes a crying sound. They may also look like they are grimacing. The emotions (pain or crying) are often forced and the person can’t stop them from happening. Most people don’t feel sense of well-being during a seizure. Usually a person is aware of what’s going on around them during these seizures.' },
  { name: 'Diabetic seizure', description: 'Diabetic seizure is a term used for seizures related to blood sugar levels. When you have extremely low or high blood sugar levels, you may experience severe symptoms, such as confusion, shock, loss of consciousness, and seizure. Diabetic seizures can be fatal. However, emergency medical care can offer relief. Medical emergency.' },
  { name: 'Epileptic or Infantile Spasm', description: 'An epileptic spasm consists of brief (1-3 second) events of arm, leg and head flexion (arms and legs pull into the body) or extension. Spasms typically occur in clusters with events every 5-10 seconds over a 5-10 minute period. Spasms often are seen shortly after waking, and clusters typically are seen several times per day. Infants often become irritable and may cry during the cluster – sometimes this leads to a misdiagnosis of colic.' },
  { name: 'Febrile Seizures', description: 'The febrile seizure age range is children 3 months to 5 or 6 years old. They may have seizures when they have a high fever. These are called febrile seizures (pronounced FEB-rile) and occur in 2% to 5% of all children (2 to 5 out of 100 children). There is a slight tendency for them to run in families.' },
  { name: 'Febrile Seizures - Simple', description: 'Febrile seizures are considered “simple” if they meet all of the following criteria: Generalized, Last less than 15 minutes, No more than one in a 24-hour period' },
  { name: 'Febrile Seizures - Complex', description: 'Febrile seizures are considered “complex or complicated” if any of the following features are present: Start focally with one body part moving independently of others, Last more than 15 minutes, Occur more than once in a 24-hour period' },
  { name: 'Focal', description: 'A focal seizure begins in one side of the brain. They were previously called partial seizures. Focal onset seizures are the most common type of seizures experienced by people with epilepsy. For short, the term focal seizure can be used.' },
  { name: 'Focal Bilateral Tonic Clonic', description: 'Also known as Secondarily Generalized Seizures. These seizures are called focal to bilateral tonic-clonic, because they start in a limited area on one side of the brain and spread to involve both sides. This is different from a generalized onset seizure, which starts on both sides of the brain.' },
  { name: 'Focal Onset Aware', description: 'When the seizure begins in one side of the brain and the person has no confusion or loss of awareness of their surroundings during it, it is called a focal aware seizure. This type of seizure was previously called a simple partial seizure.' },
  { name: 'Focal Onset Impaired Awareness', description: 'When the seizure begins in one side of the brain and the person has confusion or a change in their level of awareness during some or all of it, it is called a focal impaired awareness seizure. This type of seizure was previously called a complex partial seizure.' },
  { name: 'Gelastic', description: 'Gelastic seizures is the term used to describe focal seizures with bouts of uncontrolled laughing or giggling. They are often called laughing seizures. The person may look like they are smiling or smirking. The emotion (laughing) is often forced and the person can’t stop it from happening. Most people don’t feel happy or a sense of well-being during a gelastic seizure. The opposite may happen - they may feel scared or a loss of control. Some people may feel anxious that they will laugh at a socially inappropriate time. Usually a person is aware of what’s going on around them during these seizures.' },
  { name: 'Generalized', description: 'These seizures affect both sides of the brain or groups of cells on both sides of the brain at the same time. This term was used before and still includes seizure types like generalized tonic-clonic, absence, or atonic to name a few.' },
  { name: 'Jacksonian', description: 'A type of focal seizure that originates in a localized area of the brain, specifically the motor cortex, and spreads to other areas. Jacksonian march, also called Jacksonian seizure, is one kind of a focal onset aware seizure. Meaning patients do not lose awareness. Abnormal neuron firing only occurs in part of the brain, and, accordingly, abnormal movement or sensation is limited to only part of the body. The characteristic features of Jacksonian march are (1) it only occurs on one side of the body; (2) it progresses in a predictable pattern from twitching or a tingling sensation or weakness in a finger, a big toe or the corner of the mouth, thenmarches over a few seconds to the entire hand, foot or facial muscles.' },
  { name: 'Motor', description: 'For focal onset seizures: May include jerking (clonic), muscles becoming limp or weak (atonic), tense or rigid muscles (tonic), brief muscle twitching (myoclonus), or epileptic spasms. There may also be automatisms or repeated automatic movements, like clapping or rubbing of hands, lip smacking or chewing, or running. For generalized onset seizures: May include sustained rhythmical jerking movements (clonic), muscles becoming weak or limp (atonic), muscles becoming tense or rigid (tonic), brief muscle twitching (myoclonus), or epileptic spasms (body flexes and extends repeatedly). For unknown onset seizures: Described as either tonic-clonic or epileptic spasms.' },
  { name: 'Myoclonic', description: 'Myoclonic (MY-o-KLON-ik) seizures are brief, shock-like jerks of a muscle or a group of muscles. "Myo" means muscle and "clonus" (KLOH-nus) means rapidly alternating contraction and relaxation—jerking or twitching—of a muscle. Usually, they don\'t last more than a second or two. There can be just one, but sometimes many will occur within a short time. Sometimes myoclonus can occur in people without epilepsy. An example would be a sudden jerk that may wake you up as you\'re just falling asleep.' },
  { name: 'Non-motor', description: 'For focal onset seizures: Examples of symptoms that don’t affect movement could be changes in sensation, emotions, thinking or cognition, autonomic functions (such as gastrointestinal sensations, waves of heat or cold, goosebumps, heart racing, etc.), or lack of movement (called behavior arrest). For generalized onset seizures: Usually called absence seizures. These can be typical or atypical absence seizures (staring spells). Absence seizures can also have brief twitches (myoclonus) that can affect a specific part of the body or just the eyelids. For unknown onset seizures: Usually include a behavior arrest. This means that movement stops – the person may just stare and not make any other movements.' },
  { name: 'Tonic', description: 'Muscle "tone" is the muscle\'s normal tension at rest. In a tonic seizure, the tone is greatly increased: the body, arms, or legs become suddenly stiff or tense. A person may be aware or have only a small change in awareness during a tonic seizure. They usually happen during sleep and usually involve all or most of the brain, affecting both sides of the body. They are short, usually less than 20 seconds. A person may fall if standing when a tonic seizure starts. If stiffening is followed by rhythmic jerking, these are characteristics of tonic-clonic seizures.' },
  { name: 'Tonic-Clonic', description: 'This type of seizure (also called a convulsion) is what most people think of when they hear the word "seizure." An older term for this type of seizure is "grand mal." As implied by the name, they combine the characteristics of tonic and clonic seizures. Tonic means stiffening, and clonic means rhythmical jerking.' },
  { name: 'Unknown', description: 'When a seizure is not witnessed, or the beginning of the seizure is not clear, or its origin is classified as Unknown' }
];

const epilepsySyndromes = [
  { name: 'Catamenial Epilepsy', description: "Also known as menstrual seizures, is linked to a woman's menstrual cycle and related hormone levels in the body. Women with CE often have more seizures during certain times of their cycle. This may include: Just before or during menstruation, or period. During ovulation, the time during the cycle when an egg moves from the ovary and can be fertilized. Women with CE will generally have seizures throughout their cycle. However, the number of seizures will often increase during a certain time.", ageRange: '' },
  { name: 'Childhood Absence Epilepsy', description: "Childhood absence epilepsy (CAE) is an epilepsy syndrome with absence seizures that begin in young children. During an absence seizure, the child stares blankly and is not aware or responsive. The child's eyes may roll up briefly or the eyes may blink. Some children have repetitive movements like mouth chewing. Each seizure lasts about 10 to 20 seconds and ends abruptly.The child resumes normal activity right after the seizure and often doesn’t know that a seizure happened.Typically children have multiple absence seizures in a day before medication is started. Children usually develop normally, though children with very frequent absence seizures can have learning difficulties. Some children also have attention, concentration, and memory problems.", ageRange: '4 - 8' },
  { name: 'Childhood Epilepsy Centrotemporal Spikes (Benign Rolandic Epilepsy)', description: "This syndrome is known by two other names: Benign rolandic epilepsy of childhood (BREC), and Benign rolandic epilepsy with centrotemporal spikes (BECTS). The name derives from the rolandic area of the brain, which is the part that controls movements. The term “benign” refers to the fact that most children outgrow these seizures by adolescence. The official modern name is “childhood epilepsy with centrotemporal spikes” or CECTS. Yet, many people still just use the term benign rolandic epilepsy to refer to this syndrome. Seizures in CECTs can occur when the child is awake or during sleep. Seizures that begin during wakefulness involve twitching, numbness, or tingling of one side of the face or tongue. These symptoms can interfere with speech and may cause drooling. The child remains fully aware. These seizures are typically brief, lasting no more than 2 minutes in most cases, and are usually infrequent. Seizures that come on when the child is sleeping may start with twitching of one side of the face, but often progress to a generalized tonic-clonic seizure. They typically are seen shortly after the child goes to sleep or just before they wake up. They can also be seen during daytime naps.Other than seizures, most children are otherwise developing normally.", ageRange: '3 - 13' },
  { name: 'Developmental and Epileptic Encephalopathy (DEE)', description: "Developmental and epileptic encephalopathy (DEE) refers to a group of severe epilepsies that are characterized both by seizures, which are often drug-resistant, as well as encephalopathy, which is a term used to describe significant developmental delay or even loss of developmental skills. In the DEEs, there are two factors that contribute to the developmental delay. Developmental encephalopathy implies that developmental delays are the direct result of the underlying cause of their epilepsy. In addition, some children with DEEs also have an epileptic encephalopathy due to very frequent seizures and markedly abnormal EEGs, which may substantially worsen developmental problems. Importantly, if seizure control can be improved, the Epileptic Encephalopathy component of the delay should improve, however the Developmental Encephalopathy component will not change. Most DEEs begin early in life, often starting in infancy. Children often have very frequent and severe seizures which can be of multiple types. Often epileptic spasms, tonic or atonic seizures and myoclonic seizures can be seen. In most cases, seizures are life long, although less commonly can abate with time with certain syndromes or specific causes.", ageRange: '< 1' },
  { name: 'DEE with Spike Wave Activation In Sleep (DEE-SWAS)', description: "Previously called continuous spike-wave in sleep, electrical status epilepticus in sleep or Landau-Kleffner syndrome. This type of epilepsy was previously known as CSWS, ESES, or epilepsy with continuous spike-wave during slow wave sleep. Diagnosis of DEE-SWAS requires both of the following features: Failure to attain new developmental skills or loss of skills, An EEG showing significant activation of abnormal discharge in sleep, compared to being awake. DEE-SWAS is a rare form of epilepsy, affecting 1 out of 200 (0.5%) children with epilepsy. It starts in children between 2 and 12 years of age. Most often it starts between 4 and 5 years of age.", ageRange: '2 - 12' },
  { name: 'Dravet Syndrome', description: "Dravet syndrome is a rare, genetic epileptic encephalopathy that gives rise to seizures that don’t respond well to seizure medications. It begins in the first year of life in an otherwise healthy infant. Before 1989, this syndrome was known as epilepsy with polymorphic seizures, polymorphic epilepsy in infancy (PMEI), or severe myoclonic epilepsy in infancy (SMEI).The disease begins in infancy and is lifelong. Some more important points: Infants have normal development when seizures begin. Yet as seizures continue, most children develop some level of developmental disability. By later childhood, most children also develop a crouched walk. Diagnosis is often delayed. MRI (magnetic resonance imaging) and EEG (electroencephalogram) tests are usually normal in infants at first. About 8 out of 10 people with this syndrome have a gene mutation in SCN1A that causes problems in the way ion channels in the brain work. This mutation is most often not inherited from the parents. It is considered a de novo or \"new\" mutation in the child. Not all SCN1A mutations are associated with Dravet syndrome. Other seizure types seen in children with Dravet syndrome include Myoclonic seizures, Tonic-clonic seizures, Atypical absence seizures, Atonic seizures, Focal aware or impaired awareness seizures, Tonic seizures, Non-convulsive status epilepticus.", ageRange: '< 1' },
  { name: 'Early Infantile Developmental & Epileptic Encephalopathy', description: "Early Infantile DEE is a rare form of neonatal epilepsy occurring in 10 in 100,000 live births. EIDEE was previously known as Ohtahara syndrome or early infantile epileptic encephalopathy (EIEE) and Early Myoclonic Encephalopathy (EME). Children with EIDEE may have frequent and drug-resistant seizures in the first 3 months of life. They may also have an abnormal neurological exam even before their seizures start and have abnormal EEG findings between seizures. EIDEE affects both boys and girls. Family history, birth, and birth history are often normal for infants with this condition.", ageRange: '< 1' },
  { name: 'Epilepsy of Infancy with Migrating Focal Seizure', description: "Epilepsy of infancy with migrating focal seizures is a very rare form of epilepsy. The typical age of onset is before 6 months with an average age of onset of 3 months of age. It equally affects boys and girls. The seizures in this syndrome are characterized by focal tonic seizures or focal clonic seizures. The focal clonic seizures involve the arms and eyelids, the head turns to either side, and some people may stop and stare before the clonic activity starts. Seizures may also be difficult to detect clinically, with subtle behavioral arrest. Also autonomic changes (stop breathing, turning blue, sweating, and hiccups) can frequently be seen during the seizures. Characteristically, seizures move from one lobe of the brain to another and from one brain hemisphere to another, although this spread may only be evident if an EEG is done during seizures. Though seizures may be infrequent at onset, they quickly evolve into frequent daily and prolonged seizures with status epilepticus. Status epilepticus is common in this type of epilepsy syndrome. Infants may be developmentally normal at onset of seizures, but regression and severe developmental disabilities are the norm.", ageRange: '< 1' },
  { name: 'Epilepsy Myoclonic Absences', description: "Epilepsy with myoclonic-absences is a rare form of epilepsy. Fewer than 1 in 100 children seen in a specialty center for epilepsy have this syndrome. These seizures typically begin between 2 and 12 years of age with the majority starting around 7 years of age. They are seen more often in boys than in girls. The cause of this epilepsy syndrome is unknown.", ageRange: '2 - 12' },
  { name: 'Epilepsy Generalized Tonic Clonic Seizures Alone', description: "Epilepsy with generalized tonic-clonic seizures alone (EGTCS) was first described by Dr. Dieter Janz from Germany in 1962. This epilepsy syndrome used to be called epilepsy with tonic-clonic seizures on awakening. The generalized tonic-clonic seizures begin between 5 and 40 years of age. In 8 out of 10 people, it starts in teens and young adults between the ages of 11 and 23 years old. A family history of epilepsy is common in 2 out of 10 people. A family history of febrile seizures has been reported in 1 out of 10 people. The genetics of EGTCS is complex. In most cases, no genetic mutations are found, however, rarely, mutations or changes on a specific gene (CLCN2 gene) have been linked to this syndrome. There may be other mutations too. People with this epilepsy syndrome have normal neurological exams. Their development and cognition (for example thinking and memory) are typically normal.", ageRange: '4 - 40' },
  { name: 'Epilepsy Eyelid Myoclonia (Jeavons Syndrome)', description: "Epilepsy with Eyelid Myoclonia is a rare form of generalized epilepsy that can have several possible seizure types. It is also known as Jeavons syndrome. Eyelid myoclonia with or without absence seizures: Eyelid myoclonia is the most common seizure type. These consist of brief and repeated myoclonic jerks of the eyelids, eyeballs roll upwards, and the head may move slightly backwards. These events usually last less than 6 seconds but can happen many times per day. They are often induced or brought about by flashing lights or closing the eyes. If a person has a brief loss of awareness with the eyelid myoclonia, the seizure is called eyelid myoclonia with absence. About 1 out of 5 people can develop eyelid myoclonic status epilepticus. This happens when eyelid myoclonia and absences occur back-to-back over a prolonged period. Generalized tonic-clonic seizures are seen infrequently and occur mostly in older children and adolescents. They are usually provoked by lack of sleep or light stimulation. Myoclonic jerks of the arms and legs may occur but are not frequent. Seizures in children with Epilepsy with Eyelid Myoclonia (Jeavons syndrome) are frequent and occur multiple times a day. Seizures in this syndrome are often hard to completely control. Medication works better for generalized tonic-clonic seizures than for eyelid myoclonia. If seizure medicines control a person's generalized tonic-clonic and absence seizures, other medication trials to improve isolated eyelid myoclonia often don't help or may not be needed. This syndrome is typically life-long. It rarely goes away and people will need seizure medicines throughout their life. While many people with Epilepsy with Eyelid Myoclonia are intellectually normal, some can have varying degrees of learning problems.", ageRange: '' },
  { name: 'Familial Focal Epilepsy with Variable Foci (FFEVF)', description: "Familial focal epilepsy with variable foci (FFEVF) is a rare syndrome of focal seizures with varying degrees of severity and symptoms of seizures in different family members. Each family member will have a typical focal seizure type. These focal seizures vary, and what happens during a seizure depends on what part of the brain is affected. Sensory, motor, autonomic, (changes in color, heart rate, breathing), and cognition (changes in awareness) are possible. These seizures can occur when a person is awake or asleep. Some seizures are initially focal but can become generalized tonic-clonic seizures.", ageRange: '1 - 52' },
  { name: 'FIRES', description: "FIRES stands for febrile infection-related epilepsy syndrome. It is sometimes also called febrile illness-related epilepsy syndrome and was previously called fever induced refractory epileptic encephalopathy in school-aged children. It usually affects school-aged children with an average age of 8 years old. However, age can range from 2 years to early adulthood. Boys are slightly more commonly affected. FIRES affects a previously healthy child after a brief, nonspecific febrile (fever) illness, such as a cold or flu. Seizures typically start 24 hours to 2 weeks after the illness begins. Fever might not be present when seizures start. Seizures are usually focal (affecting one part of the body) but become more frequent with altered awareness between events. Seizures evolve to continuous or nearly continuous seizure activity, which is called status epilepticus. They respond poorly to most medications. The initial, acute phase of status epilepticus can last up to 2 weeks or longer. FIRES is considered a subcategory of NORSE - new onset refractory status epilepticus.", ageRange: '2 <' },
  { name: 'Genetic Epilepsy with Febrile Seizures Plus', description: "This syndrome was first described by Drs Berkovic and Scheffer in 1997 and called Generalized Epilepsy with Febrile Seizures Plus. In 2020, the G for “generalized” was replaced with “genetic” because patients with this syndrome may not have “generalized” seizures but could also have focal seizures. Typically, seizures start between 3 months and 6 years of age, are triggered by fever, and are generalized and short lasting for most patients. However instead of the common febrile seizure syndrome where patients are likely to outgrow the fever-induced seizures by 6 years old, patients with FS+ will continue to have febrile or non-febrile types of seizures after age 6 years. There may be members in a family of GEFS+ family where some members have more severe forms of epilepsy called Dravet syndrome or myoclonic atonic epilepsy.", ageRange: '0 - 6' },
  { name: 'Infantile Spasms (West Syndrome)', description: "Infantile Spasms Are An Emergency. Infantile spasms (also called IS) are also known as West syndrome because it was first described by Dr. William James West in the 1840s. These seizures may be subtle and be confused with other normal baby behaviors or colic. IS can appear in different ways. Sometimes they may called “‘flexor spasms” or “jackknife seizures” due to their appearance. The spasms consist of a sudden stiffening. Often the arms fling out as the knees pull up and the body bends forward. Less often, the head can be thrown back as the body and legs stiffen in a straight-out position. Movements can also be more subtle and limited to the neck or other body parts. Infants may cry during or after the seizure. Each seizure lasts only a second or two, but they usually occur close together in a series. Sometimes the spasms are mistaken for colic, but the cramps of colic do not occur in a series. They happen most often just after waking up. They rarely occur during sleep. Babies with infantile spasms often seem to stop developing as expected. Or they may lose skills like sitting, rolling over, or babbling. Often babies lose interest in their surroundings. They may interact less socially too.", ageRange: '< 1' },
  { name: 'Juvenile Absence Epilepsy', description: "Seizures in juvenile absence epilepsy (JAE) can be of two main types. Absence seizures are seen in all cases. In an absence seizure, the young person will stare and is either unresponsive or has impaired responsiveness. Their eyes may roll up briefly or the eyelids may flutter. Some people may have repetitive movements, like mouth chewing (automatisms). Absence seizures usually last 10 to 45 seconds and end abruptly. The person can resume normal activity after the seizure and often is not even aware that anything has happened. Absence seizures typically are seen less than daily. Generalized tonic-clonic seizures are seen in about 8 in 10 people. Generalized tonic-clonic seizures involve whole body stiffening and jerking. They usually occur when waking up. They usually last seconds to minutes. Their frequency is variable. People with JAE usually develop normally. One in 3 people may also have attention, concentration, and memory problems that may improve with treatment of absences.", ageRange: '10 - 16' },
  { name: 'Juvenile Myoclonic Epilepsy', description: "Juvenile myoclonic epilepsy (JME) is the most common generalized epilepsy syndrome. It is also called Juvenile Myoclonic Epilepsy of Janz. It usually is first seen in adolescence. Less commonly, it can develop in a child who has had childhood absence epilepsy. Myoclonic seizures are the most common seizure type and occur in everyone with JME. Myoclonic jerks or seizures in JME typically happen within 1 to 2 hours of waking up in the morning or after a nap. They are described as shock-like and irregular movements of both arms. Sometimes the movements happen only in the fingers, making the person look clumsy or prone to dropping things. In about 1 out of 5 people, the myoclonic jerks occur primarily on one side of the body. Myoclonic jerks are often triggered by lack of sleep and flashing lights. Not all myoclonus or muscle jerks are seizures. Many people have isolated muscle jerks that occur as they are falling asleep. These non-seizure movements are called hypnic jerks. Myoclonic status epilepticus is rare in JME. This term describes multiple myoclonic seizures that do not readily stop. This occurs when a person first wakes up and is usually triggered by missing a lot of sleep or missing medications. Generalized tonic-clonic seizures are seen in nearly all people with JME. They usually begin a few months after the myoclonic jerks start. These also happen in the morning when a cluster of myoclonic jerks may occur before the tonic-clonic seizure. Absence seizures happen in less than half of people with JME. They are often very short (lasting less than 10 seconds) and usually don’t occur every day. Absence seizures with JME may not affect a person’s awareness as much as absence seizures in people with childhood or juvenile absence epilepsy. Both males and females are affected equally.", ageRange: '10 - 19' },
  { name: 'Lafora Disease', description: "This type of PME is also called Lafora epilepsy, progressive myoclonus 2, and EPM2A. Lafora disease is characterized by the buildup of Lafora bodies (carbohydrate/surger particles) in cells in the brain and spinal cord. The Lafora bodies can also be found in muscles or skin cells. Although this syndrome begins more specifically in adolescents (12-15 years), there is a form of Lafora disease that can start as young as age 5. After seizures start, there is a rapid worsening of cognition (thinking), visual loss, and coordination. This differs from EPM1, which has a significant motor decline first. Cognitive decline impairs motor planning, causing difficulty with brushing teeth, brushing hair, and bringing utensils to the mouth. The decline usually occurs within the first 10 years. People with Lafora disease also have a shortened life span.", ageRange: '6 - 16' },
  { name: 'Lennox Gastaut Syndrome LGS', description: "The Lennox-Gastaut syndrome (LGS) is a type of epilepsy with multiple different types of seizures, particularly tonic (stiffening) and atonic (drop) seizures. Intellectual development is usually delayed and often worsens over time. Behavioral problems, including hyperactivity, agitation, aggression and autism, are common. Lennox-Gastaut syndrome is a type of “epileptic encephalopathy.” This terms means that the frequent seizures and very abnormal EEG (electroencephalograph) activity worsens cognitive and behavioral problems. The cause of the disorder is unknown in 1 out of 4 children.", ageRange: '2 - 5' },
  { name: 'Myoclonic Atonic Epilepsy Doose Syndrome', description: "Myoclonic atonic epilepsy (MAE), typically known as Doose syndrome, was first described by Dr. Herman Doose from Germany in 1970. It is an uncommon childhood epilepsy syndrome that accounts for 1 to 2 out of 100 (1 to 2%) of all childhood-onset epilepsies. Usually the first seizure occurs between 2 and 6 years of age. Boys tend to be affected more than girls (two thirds to three quarters of children with MAE will be boys). More than half of children start with a generalized tonic-clonic seizure with or without fever. Within days to months, drop seizures begin. Many children also develop myoclonic jerks and absence seizures, and some may develop tonic seizures. Most children with MAE are developing normally when seizures begin.", ageRange: '2 - 6' },
  { name: 'Myoclonic Epilepsy in Infancy', description: "Myoclonic epilepsy in infancy is a condition that occurs in previously healthy toddler-age children. There is onset of myoclonic seizures between 6 months to 2 years, although occasionally as young as 4 months and up to 5 years old. Myoclonic seizures are the only seizure type at onset, although infrequent febrile seizures can occur in up to 30% of children. Seizures typically resolve between 6 months and 5 years after onset. There can be associated learning, motor, and behavioral difficulties, especially if seizures are not controlled.", ageRange: '0 - 2' },
  { name: 'Neuronal Ceroid Lipofuscinoses', description: "This type of PME is more commonly called Batten disease. Batten disease refers to a family of about seven disorders within the neuronal ceroid lipofuscinoses group.These diseases are caused by an error in a lysosomal enzyme needed to help breakdown and get rid of unneeded material within a cell. Without the enzyme, material builds up in cells of the nervous system, causing them to malfunction. It can begin at different ages, including in infants, adolescents and adults.The first symptoms are myoclonus and generalized tonic-clonic seizures. These are followed by cognitive and emotional decline, motor decline, and visual loss leading to blindness (from damage to the retina).The length of survival depends on the specific subtype, but all of these lead to early death.", ageRange: '6 - 16' },
  { name: 'Panayiotopoulos Syndrome', description: "This syndrome is also known as early onset childhood occipital epilepsy. Panayiotopoulos syndrome (PS) starts in early childhood, usually between the ages of 3-6 years, but children from 1-13 years have been described. Both boys and girls can develop PS. It occurs in approximately 3 out of 50 (6%) children between the ages of 1-15 who have epilepsy. Children with PS mostly have normal physical and cognitive development. Abnormalities that cause seizures and can be seen on EEG (electrocephalograph) commonly come from the occipital lobes, which is located in the back of the brain. Seizures in Panayiotopoulos syndrome usually start as focal seizures that evolve to a generalized seizure. During a seizure, a child may look pale, complain of feeling sick and may vomit. They may faint and pupils may dilate or get large. They often can keep interacting with the people around them. Eyes may turn to one side and tonic-clonic movements may occur in some children. During a seizure, some children may be unable to see (lose vision temporarily), see flashing colorful or bright lights, or have blurry vision. Seizures happen at any time during the day. Most often they happen during sleep or shortly after falling asleep. Seizures tend to be prolonged, lasting 1 to 30 minutes. Longer seizures (lasting up to 2 hours) occur in 21-50% of children with PS. The longer the seizures last, the more likely they will progress to generalized tonic-clonic movements.The seizure symptoms of PS are frequently mistaken as non-epileptic conditions, such as fainting, migraine, cyclic vomiting syndrome, motion sickness, sleep disorder, or stomach flu.", ageRange: '1 - 13' },
  { name: 'Photosensitive Occipital Lobe Epilepsy (POLE)', description: "Photosensitive occipital lobe epilepsy is a very rare condition with an estimated occurrence in 0.7% of childhood epilepsies. This syndrome was formerly known as idiopathic photosensitive occipital lobe epilepsy. POLE is most often diagnosed in children and adolescents between ages 4-17. Females are more often affected than males and a family history of the condition is seen in a third of patients.", ageRange: '4 - 17' },
  { name: 'Progressive Myoclonic Epilepsies', description: "Progressive myoclonic epilepsies (PME) are a group of more than 10 rare types of epilepsies that are “progressive.” People with PME have a decline in motor skills, balance and cognitive function over time. People with one of the PMEs have a mix of myoclonic (rapid muscle jerks of various body parts) and tonic-clonic seizures. Other symptoms that usually happen later on are unsteadiness, muscle rigidity (tightness of the muscles), balance problems, and mental decline. People with PME eventually need a wheelchair and significant help for normal daily activities. They also have a shortened life span. Progressive myoclonic epilepsies affecs both sexes equally. The age of onset can vary from infancy to adulthood, depending on the specific type of myoclonic epilepsy and the underlying genetic mutation.The most common forms are first noted in early adolescence to late childhood. They happen in otherwise normal and previously healthy children. Because the inheritance pattern and disease course can vary significantly based on the genetic cause, diagnosing the gene is important for counseling the patient and the family.", ageRange: '6 - 16' },
  { name: 'Reflex Epilepsies', description: "Reflex epilepsies are a group of epilepsy syndromes in which a certain trigger or stimulus brings on seizures. The trigger can be something simple in the environment or something more complex. Simple environmental triggers include sensations like touch, light or movement. Complex triggers may include activities like reading, writing, doing arithmetic, or even thinking about specific topics. Other environmental triggers include sounds, such as church bells, a certain type of music or song, or a person's voice. Simple sound induced seizures in humans are very rare. Seizures also have been triggered in a few people by things like the patterns of a moving escalator step, tooth brushing, taking a hot bath, or being rubbed. For some people, certain rates of blinking or even specific colors may provoke seizures. Sensory triggers can bring seizures on within seconds, while more complex triggers might take minutes to bring on a seizure. Common types of reflex epilepsy include: Photosensitivity, Eye closure sensitivity, Orofacial reflex myoclonia, Praxis induction, Musicogenic epilepsy, Epilepsy with eyelid myoclonia (Jeavons syndrome).", ageRange: '' },
  { name: 'Self Limited Familial and Non-Familial Neonatal Infantile Seizures', description: "The epilepsy syndrome of self-limited neonatal-infantile seizures used to be known as benign familial or non-familial neonatal-infantile seizures. Seizures begin in the first several months of life in an otherwise healthy infant. Typical seizure onset is between 2 days and 7 months of life. There is no difference in the electrical patterns on EEG or the features of neonatal-infantile seizures that have a familial or non-familial pattern.The only difference is the presence of family history of seizures. If no family history is present, it is thought the genetic change causing this condition occurred for the first time in the child (termed de novo). Males and females are equally affected by this condition. The typical seizures have repetitive jerking on one side of the face or body, such as the arm, leg, or both, and often. The jerking often spreads to jerking movements on both sides of the body. The seizures sometimes cluster together when they occur. Mild learning difficulties may be present in some children.", ageRange: '< 1' },
  { name: 'Self Limited Late Onset Occipital Epilepsy Gastaut Syndrome', description: "This syndrome is also known as: Late-onset, childhood epilepsy with occipital paroxysms, Late onset benign occipital epilepsy of Gastaut, or Self-limited late onset childhood occipital epilepsy of Gastaut.The EEG in self-limited, late-onset occipital epilepsy may be similar to Panayiatopoulos syndrome which is seen earlier in life. The EEG changes are found in the occipital lobes (back part of the brain) where the seizures typically begin. This area of the brain helps process visual information. Seizures in this epilepsy initially involve simple visual symptoms. A person may see colors or circular dots. Loss of vision can occur. Children can also have nystagmus (rapid back-and-forth movements of the eyes) and deviation or turning of the eyes in one direction. As the seizure progresses, more of the visual field can become involved. These seizures usually remain focal in the occipital lobes. Sometimes they may spread to both sides of the brain and a generalized tonic clonic seizure may happen. Seizures typically last 1-3 minutes. Children can have headaches after their seizures.This is a rare type of epilepsy. It accounts for less than 1% of epilepsy. This epilepsy most commonly affects older school aged children, usually beginning around 8 years old. A family history of epilepsy is seen in approximately 1 out of 3 families.", ageRange: '8' },
  { name: 'Sleep-related Hypermotor Epilepsy (SHE)', description: "Nocturnal frontal lobe epilepsy was first described in 1981 in 5 people with peculiar movements that happen in sleep. Violent movements of arms or legs and strange posturing were seen, similar to seizures seen in people having EEG (electroencephalogram) monitoring. Seizures begin between 1 and 60 years of age. Over 85% of people are diagnosed before 20 years old. It usually begins when someone is 9 years old. Both males and females are affected equally. People are developmentally normal before the seizures start and rarely have worsening of thinking and memory. The syndrome's name was changed from autosomal dominant nocturnal frontal lobe epilepsy (ADNFLE) to sleep-related hypermotor epilepsy (SHE), because events are brought on by sleep. Seizures can arise from other areas of the brain. Motor movements are seen. Other names for this syndrome are: Nocturnal frontal lobe epilepsy, Frontal lobe epilepsy, Autosomal dominant frontal lobe epilepsy", ageRange: '1 - 60' },
  { name: 'Temporal Lobe Epilepsy (TLE)', description: "Temporal lobe epilepsy is the most common form of focal epilepsy. About 6 out of 10 people with focal epilepsy have temporal lobe epilepsy. Seizures in TLE start or involve in one or both temporal lobes in the brain. Seizures in TLE include focal aware seizures, such as auras, and focal impaired awareness seizures. There are a lot of older names for seizures that occur in TLE, including \"psychomotor seizures,\" \"limbic seizures,\" \"temporal lobe seizures,\" \"complex partial,\" and \"simple partial.\" The modern name for these seizures is \"focal onset seizures.\" Focal seizures are then described by whether a person stays awake and aware or has impaired awareness during a seizure.", ageRange: '' },
  { name: 'Unverricht-Lundborg Disease', description: "This type of PME is also called Baltic myoclonus and epilepsy, progressive myoclonus 1, and EPM1. This is the most common form of PME worldwide. It is caused by a mutation within a protein that is important for the proper function of the lysosome (the part of a cell that breaks down waste). There are over 14 different known genetic mutations. A distinguishing feature (in addition to those above) is dysarthria (trouble with speaking clearly), dysphagia (difficulty swallowing/eating), and tremor. An earlier onset of symptoms predicts a more severe course. Although life expectancy is shortened, it is extremely variable. In the past, life expectancy was 8 - 15 years after symptoms began. Yet with newer supportive treatments, some people with milder forms of EMP1 can live into their 70s.", ageRange: '6 - 16' }
];

const Classification = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('types'); // 'types' or 'syndromes'

  const filteredTypes = seizureTypes.filter(type => 
    type.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    type.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSyndromes = epilepsySyndromes.filter(syndrome => 
    syndrome.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    syndrome.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '1000px' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <h1 className="section-title">Seizure <span>Classification</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          Understanding the different types of seizures is critical for accurate diagnosis and treatment. 
          Seizures are generally classified into three main categories based on where they begin in the brain.
        </p>
      </section>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Focal Onset */}
        <div className="card" style={{ borderLeft: '6px solid var(--accent-primary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'rotate(15deg)' }}>
            <Activity size={150} />
          </div>
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--accent-light)', borderRadius: '12px' }}>
                <Activity size={32} color="var(--accent-primary)" />
              </div>
              <h2 style={{ margin: 0, fontSize: '2rem' }}>Focal Onset</h2>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Focal seizures can start in one area or group of cells in one side of the brain.
            </p>

            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} /> Included Types & Terminology
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Aware', 'Impaired Awareness', 'Focal to Bilateral Tonic-Clonic', 'Jacksonian Seizures', 'Complex Partial Seizure*', 'Simple Partial Seizure*'].map((type, i) => (
                  <span key={i} style={{ 
                    background: 'var(--bg-secondary)', 
                    color: 'var(--accent-primary)', 
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Generalized Onset */}
        <div className="card" style={{ borderLeft: '6px solid #a855f7', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'rotate(15deg)' }}>
            <Brain size={150} />
          </div>
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: '#f3e8ff', borderRadius: '12px' }}>
                <Brain size={32} color="#a855f7" />
              </div>
              <h2 style={{ margin: 0, fontSize: '2rem' }}>Generalized Onset</h2>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              These seizures affect both sides of the brain or groups of cells on both sides of the brain at the same time.
            </p>

            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} /> Included Types & Terminology
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Tonic-Clonic', 'Absence', 'Atonic', 'Impaired Awareness', 'Grand Mal*', 'Atypical Absence Seizures'].map((type, i) => (
                  <span key={i} style={{ 
                    background: 'var(--bg-secondary)', 
                    color: '#a855f7', 
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Unknown Onset */}
        <div className="card" style={{ borderLeft: '6px solid #64748b', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'rotate(15deg)' }}>
            <HelpCircle size={150} />
          </div>
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '12px' }}>
                <HelpCircle size={32} color="#64748b" />
              </div>
              <h2 style={{ margin: 0, fontSize: '2rem' }}>Unknown Onset</h2>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              When the beginning of a seizure is not known, it's called an unknown onset seizure. A seizure could also be called an unknown onset if it's not witnessed or seen by anyone, for example when seizures happen at night or in a person who lives alone. As more information is learned, an unknown onset seizure may later be diagnosed as a focal or generalized seizure.
            </p>

            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} /> Included Types & Terminology
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Tonic-Clonic', 'Absence', 'Impaired Awareness'].map((type, i) => (
                  <span key={i} style={{ 
                    background: 'var(--bg-secondary)', 
                    color: '#64748b', 
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
        * Note: Terms with an asterisk (*) represent older or alternative terminology that is still sometimes used by patients or clinicians.
      </p>

      {/* Dictionary Section */}
      <section style={{ borderTop: '2px solid var(--border-color)', paddingTop: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <Book size={36} color="var(--accent-primary)" /> Medical Directory
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Browse through detailed descriptions of specific seizure types and epilepsy syndromes. You can use the tabs to switch directories, and the search box to filter.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button 
            onClick={() => setActiveTab('types')}
            style={{ 
              padding: '0.75rem 2rem', 
              fontSize: '1.1rem', 
              fontWeight: 600, 
              borderRadius: '50px', 
              border: activeTab === 'types' ? '2px solid var(--accent-primary)' : '2px solid transparent',
              background: activeTab === 'types' ? 'var(--accent-light)' : 'var(--bg-secondary)',
              color: activeTab === 'types' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
            Seizure Types
          </button>
          <button 
            onClick={() => setActiveTab('syndromes')}
            style={{ 
              padding: '0.75rem 2rem', 
              fontSize: '1.1rem', 
              fontWeight: 600, 
              borderRadius: '50px', 
              border: activeTab === 'syndromes' ? '2px solid var(--accent-primary)' : '2px solid transparent',
              background: activeTab === 'syndromes' ? 'var(--accent-light)' : 'var(--bg-secondary)',
              color: activeTab === 'syndromes' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
            Epilepsy Syndromes
          </button>
        </div>

        {/* Search Input */}
        <div style={{ maxWidth: '600px', margin: '0 auto 3rem auto', position: 'relative' }}>
          <Search size={20} color="var(--text-secondary)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder={`Search for a ${activeTab === 'types' ? 'seizure type' : 'syndrome'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '1rem 1rem 1rem 3rem', 
              fontSize: '1.1rem', 
              borderRadius: '50px', 
              border: '2px solid var(--border-color)',
              outline: 'none',
              transition: 'border-color 0.2s',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
        </div>

        {/* List of Items */}
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {activeTab === 'types' && (
            filteredTypes.length > 0 ? (
              filteredTypes.map((item, index) => (
                <div key={index} className="card" style={{ padding: '1.5rem 2rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                <p style={{ fontSize: '1.2rem' }}>No seizure types found matching "{searchTerm}"</p>
              </div>
            )
          )}

          {activeTab === 'syndromes' && (
            filteredSyndromes.length > 0 ? (
              filteredSyndromes.map((item, index) => (
                <div key={index} className="card" style={{ padding: '1.5rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-primary)', margin: 0 }}>{item.name}</h3>
                    {item.ageRange && (
                      <span style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        background: 'var(--bg-secondary)', 
                        padding: '0.4rem 1rem', 
                        borderRadius: '50px', 
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)'
                      }}>
                        <Clock size={14} /> Age of Onset: {item.ageRange} yrs
                      </span>
                    )}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                <p style={{ fontSize: '1.2rem' }}>No epilepsy syndromes found matching "{searchTerm}"</p>
              </div>
            )
          )}
        </div>
      </section>

    </div>
  );
};

export default Classification;
