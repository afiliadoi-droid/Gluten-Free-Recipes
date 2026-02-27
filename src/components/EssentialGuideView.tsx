import React from 'react';
import { motion } from 'motion/react';
import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';

const BRAND_COLOR = '#006064';

function downloadGuide() {
    const doc = new jsPDF();
    const brand = BRAND_COLOR;
    const pageW = 210;
    const margin = 20;
    const maxW = pageW - margin * 2;
    let y = 0;

    const checkPage = (needed = 10) => {
        if (y + needed > 275) { doc.addPage(); y = 20; }
    };

    const addTitle = (text: string) => {
        checkPage(20);
        doc.setFontSize(22);
        doc.setTextColor(brand);
        doc.setFont('helvetica', 'bold');
        const lines = doc.splitTextToSize(text, maxW);
        doc.text(lines, pageW / 2, y, { align: 'center' });
        y += lines.length * 9 + 4;
    };

    const addChapter = (label: string, title: string) => {
        checkPage(24);
        doc.setFontSize(9);
        doc.setTextColor(brand);
        doc.setFont('helvetica', 'bold');
        doc.text(label.toUpperCase(), margin, y);
        y += 5;
        doc.setFontSize(16);
        const lines = doc.splitTextToSize(title, maxW);
        doc.text(lines, margin, y);
        y += lines.length * 7 + 2;
        doc.setDrawColor(brand);
        doc.setLineWidth(0.8);
        doc.line(margin, y, margin + 16, y);
        y += 6;
    };

    const addSub = (text: string) => {
        checkPage(10);
        doc.setFontSize(12);
        doc.setTextColor(40, 40, 40);
        doc.setFont('helvetica', 'bold');
        const lines = doc.splitTextToSize(text, maxW);
        doc.text(lines, margin, y);
        y += lines.length * 6 + 2;
    };

    const addPara = (text: string) => {
        checkPage(10);
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        doc.setFont('helvetica', 'normal');
        const lines = doc.splitTextToSize(text, maxW);
        doc.text(lines, margin, y);
        y += lines.length * 5 + 3;
    };

    const addBullets = (items: string[]) => {
        items.forEach(item => {
            checkPage(7);
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            doc.setFont('helvetica', 'normal');
            const lines = doc.splitTextToSize(`• ${item}`, maxW - 4);
            doc.text(lines, margin + 2, y);
            y += lines.length * 5 + 1;
        });
        y += 2;
    };

    const addSpacer = (n = 6) => { y += n; };

    // ── Cover ──
    y = 50;
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text('Your Practical Handbook for a Healthier Life', pageW / 2, y, { align: 'center' });
    y += 8;
    addTitle('Essential Guide for Gluten Intolerance,\nLactose Intolerance & Diabetes');
    y += 10;

    // ── Introduction ──
    doc.setFontSize(9);
    doc.setTextColor(brand);
    doc.setFont('helvetica', 'bold');
    doc.text('INTRODUCTION', margin, y); y += 5;
    addPara('Living with gluten intolerance, lactose intolerance or diabetes does not mean giving up delicious food. It means learning a new and better way to eat. This guide was created to help you understand your condition, make smarter food choices, read labels confidently and live a full, healthy and enjoyable life.');
    addSpacer();

    // ── Ch 1 ──
    addChapter('Chapter 1', 'Understanding Gluten Intolerance');
    addSub('What is gluten?'); addPara('Gluten is a protein found in wheat, barley and rye. For most people it causes no problems. But for those with celiac disease or gluten sensitivity, consuming gluten triggers a reaction that can cause serious damage.');
    addSub('What is celiac disease?'); addPara('Celiac disease is an autoimmune condition. The immune system attacks the lining of the small intestine, damaging villi and leading to malnutrition.');
    addSub('What is non-celiac gluten sensitivity?'); addPara('A condition with celiac-like symptoms but without intestinal damage or antibodies. Symptoms are real and disruptive.');
    addSub('Common symptoms'); addBullets(['Bloating and gas', 'Abdominal pain and cramping', 'Diarrhea or constipation', 'Fatigue and brain fog', 'Headaches', 'Joint pain', 'Skin rashes', 'Mood changes and anxiety', 'Nutrient deficiencies']);
    addSub('Foods that contain gluten'); addBullets(['Wheat in all forms (bread, pasta, flour, couscous, semolina, spelt)', 'Barley (malt, malt vinegar, barley flour)', 'Rye (rye bread, rye crackers)', 'Many processed foods (soups, sauces, beer, some medications)']);
    addSub('Hidden sources of gluten'); addBullets(['Soy sauce and teriyaki sauce', 'Oats not certified gluten-free', 'Imitation meats and seafood', 'Seasoning packets and spice blends', 'Some chips and snacks', 'Licorice candy', 'Some vitamins and supplements']);
    addSub('Safe gluten-free alternatives'); addBullets(['Rice flour', 'Almond flour', 'Coconut flour', 'Tapioca starch', 'Potato starch', 'Certified GF oat flour', 'Chickpea flour', 'Buckwheat flour', 'Amaranth flour', 'Teff flour', 'Certified GF corn flour', 'Quinoa']);
    addSub('Tips for living gluten-free'); addBullets(['Always read labels. Look for certified gluten-free logos.', 'Be aware of cross-contamination.', 'Use separate utensils and cutting boards.', 'Tell restaurant servers about your condition.', 'Focus on naturally gluten-free whole foods.']);
    addSpacer();

    // ── Ch 2 ──
    addChapter('Chapter 2', 'Understanding Lactose Intolerance');
    addSub('What is lactose?'); addPara('Lactose is a natural sugar in milk. Lactose-intolerant people lack enough lactase enzyme to digest it, causing digestive symptoms.');
    addSub('Is it the same as a dairy allergy?'); addPara('No. A dairy allergy is an immune response that can be life-threatening. Lactose intolerance is a digestive issue. Both require avoiding dairy.');
    addSub('Common symptoms'); addBullets(['Bloating', 'Gas', 'Stomach cramps', 'Diarrhea', 'Nausea (usually 30 min – 2 hrs after dairy)']);
    addSub('Foods containing lactose'); addBullets(['Milk (cow, goat, sheep)', 'Cheese (especially soft and processed)', 'Butter and cream', 'Ice cream and frozen yogurt', 'Yogurt', 'Whey and casein in protein bars', 'Baked goods, soups and sauces with milk/butter']);
    addSub('Hidden sources'); addBullets(['Bread and baked goods', 'Breakfast cereals', 'Instant mashed potatoes', 'Some margarines', 'Processed meats', 'Salad dressings', 'Medications using lactose as filler']);
    addSub('Dairy-free alternatives'); addBullets(['Almond milk', 'Coconut milk and cream', 'Certified GF oat milk', 'Rice milk', 'Cashew milk', 'Soy milk', 'Coconut oil (instead of butter)', 'Dairy-free yogurt', 'Dairy-free cheese', 'Dairy-free chocolate and ice cream']);
    addSub('Tips for living dairy-free'); addBullets(['Read labels carefully.', 'Look for dairy-free, non-dairy or vegan labels.', 'Coconut milk is excellent in cooking and baking.', 'Some tolerate hard aged cheeses in small amounts.', 'Keep a food diary to identify triggers.']);
    addSpacer();

    // ── Ch 3 ──
    addChapter('Chapter 3', 'Understanding Diabetes');
    addSub('What is diabetes?'); addPara('Diabetes is a chronic condition affecting how the body processes blood sugar. Insulin helps glucose enter cells for energy.');
    addSub('Types'); addBullets(['Type 1: Autoimmune, no insulin produced, requires injections.', 'Type 2: Not enough insulin or not used effectively. Influenced by diet and lifestyle.', 'Prediabetes: Higher-than-normal blood sugar, reversible with lifestyle changes.', 'Gestational: During pregnancy, increases risk of Type 2 later.']);
    addSub('Common symptoms'); addBullets(['Frequent urination', 'Excessive thirst', 'Unexplained weight loss', 'Fatigue', 'Blurred vision', 'Slow-healing wounds', 'Frequent infections', 'Numbness or tingling in hands and feet']);
    addSub('Foods to limit or avoid'); addBullets(['White bread, white rice, white pasta', 'Sugary drinks (soda, juice, energy drinks)', 'Candy, pastries, desserts with added sugar', 'Processed snack foods', 'Foods high in saturated/trans fats', 'Alcohol', 'Sweetened cereals', 'Flavored yogurts with added sugar']);
    addSub('Diabetes-friendly foods'); addBullets(['Non-starchy vegetables (spinach, broccoli, peppers, zucchini)', 'Lean proteins (chicken, turkey, fish, eggs, legumes)', 'Healthy fats (avocado, olive oil, nuts, seeds)', 'Gluten-free whole grains (quinoa, brown rice, oats)', 'Low-GI fruits (berries, apples, pears, cherries)', 'Unsweetened almond milk and coconut milk']);
    addSub('Glycemic index'); addPara('Low GI: vegetables, legumes, nuts, seeds, most fruits, oats. High GI: white bread, white rice, potatoes, sugary foods.');
    addSub('Diet management tips'); addBullets(['Eat regular meals at consistent times.', 'Control portion sizes.', 'Combine carbs with protein and healthy fats.', 'Stay hydrated. Drink mostly water.', 'Limit processed foods.', 'Read labels for total carbs and added sugars.', 'Exercise regularly.', 'Monitor blood sugar regularly.', 'Work with a doctor or dietitian.']);
    addSpacer();

    // ── Ch 4 ──
    addChapter('Chapter 4', 'Reading Food Labels');
    addSub('How to read a nutrition label'); addBullets(['1. Check serving size.', '2. Check total carbohydrates.', '3. Look at added sugars (less is better).', '4. Check the ingredients list (most to least by weight).', '5. Look for allergen warnings.']);
    addSub('Gluten words on labels'); addBullets(['Wheat, wheat starch, wheat germ, wheat bran', 'Barley, malt, malt extract, malt vinegar', 'Rye', 'Spelt, kamut, triticale, durum, semolina, farro', 'Modified food starch (unless GF)', 'Hydrolyzed wheat protein']);
    addSub('Dairy words on labels'); addBullets(['Milk, cream, butter, ghee', 'Cheese, casein, caseinate', 'Whey, whey protein, lactalbumin, lactoglobulin', 'Lactose, lactic acid', 'Curds, milk solids, milk powder']);
    addSub('Sugar words on labels'); addBullets(['Sugar, cane sugar, brown sugar, beet sugar', 'High fructose corn syrup, corn syrup', 'Honey, agave, maple syrup, molasses', 'Dextrose, glucose, fructose, sucrose, maltose', 'Fruit juice concentrate', 'Evaporated cane juice']);
    addSpacer();

    // ── Ch 5 ──
    addChapter('Chapter 5', 'Meal Planning Tips');
    addSub('Building a balanced plate'); addBullets(['½ plate: Non-starchy vegetables', '¼ plate: Lean protein', '¼ plate: Complex gluten-free carbs', 'Small serving: Healthy fat']);
    addSub('Sample daily meal plan'); addBullets(['Breakfast: GF oatmeal with berries and almond butter', 'Lunch: Salad with grilled chicken, avocado and olive oil dressing', 'Snack: Apple with almond butter or mixed nuts', 'Dinner: Baked salmon with roasted vegetables and quinoa', 'Dessert: Chia seed pudding with coconut milk and blueberries']);
    addSub('Smart shopping tips'); addBullets(['Shop the perimeter for fresh produce and meats.', 'Buy whole foods and prepare meals at home.', 'Stock GF staples (rice flour, almond flour, quinoa, nut butters).', 'Read every label every time.', 'Prefer fresh or frozen produce over canned.']);
    addSpacer();

    // ── Ch 6 ──
    addChapter('Chapter 6', 'Eating Out with Confidence');
    addSub('At restaurants'); addBullets(['Call ahead or check menus online.', 'Tell your server about your restrictions.', 'Ask how dishes are prepared.', 'Ask for sauces on the side.', 'Avoid shared fryers.', 'Choose grilled, baked or steamed options.', 'Cross-contamination is a real risk.']);
    addSub('Safe choices'); addBullets(['Grilled fish or chicken with steamed vegetables', 'Salads with olive oil and vinegar', 'Rice-based dishes without soy sauce', 'Clear broth soups', 'Fresh fruit for dessert']);
    addSub('Traveling'); addBullets(['Pack safe snacks (nuts, seeds, fruit, GF bars).', 'Research restaurants at your destination.', 'Book accommodation with a kitchen if possible.', 'Carry a dietary restriction card in the local language.']);
    addSpacer();

    // ── Ch 7 ──
    addChapter('Chapter 7', 'Emotional Wellbeing & Lifestyle');
    addSub('Coping with dietary restrictions'); addBullets(['Focus on what you CAN eat.', 'Find your community (online groups, support groups).', 'Celebrate every healthy choice as a victory.', 'Be patient — adjusting takes time.']);
    addSub('Regular medical care'); addBullets(['Visit your doctor regularly for blood tests.', 'For celiac, check-ups ensure intestinal healing.', 'For diabetes, monitor blood sugar and get HbA1c tests.', 'Work with a registered dietitian.']);
    addSub('The role of exercise'); addPara('Exercise lowers blood sugar, improves insulin sensitivity, reduces inflammation and boosts mood. Aim for 30 minutes of moderate activity most days.');
    addSpacer(10);

    // ── Final message ──
    doc.setFontSize(9);
    doc.setTextColor(brand);
    doc.setFont('helvetica', 'bold');
    checkPage(30);
    doc.text('FINAL MESSAGE', pageW / 2, y, { align: 'center' }); y += 6;
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.setFont('helvetica', 'normal');
    const finalText = 'Living with gluten intolerance, lactose intolerance or diabetes is a lifelong journey. With the right knowledge, tools and mindset, you can live a full, vibrant and delicious life. Every recipe in this book is gluten-free, dairy-free, and sugar is always optional. Happy and healthy cooking!';
    const finalLines = doc.splitTextToSize(finalText, maxW);
    doc.text(finalLines, pageW / 2, y, { align: 'center' });

    doc.save('essential-guide-gluten-lactose-diabetes.pdf');
}

export const EssentialGuideView = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
        >
            {/* Book cover strip */}
            <div
                className="rounded-2xl p-8 mb-8 text-white text-center shadow-xl"
                style={{
                    background: 'linear-gradient(135deg, #006064 0%, #00838f 50%, #004d40 100%)',
                }}
            >
                <p className="text-xs font-bold tracking-[0.25em] uppercase opacity-75 mb-3">
                    Your Practical Handbook for a Healthier Life
                </p>
                <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">
                    Essential Guide for Gluten Intolerance,<br />
                    Lactose Intolerance &amp; Diabetes
                </h1>
                <div className="mt-4 w-16 h-1 bg-white/40 rounded-full mx-auto" />
            </div>

            {/* Introduction */}
            <BookSection>
                <SectionLabel>Introduction</SectionLabel>
                <Paragraph>
                    Living with gluten intolerance, lactose intolerance or diabetes does not mean giving up
                    delicious food. It means learning a new and better way to eat. This guide was created to
                    help you understand your condition, make smarter food choices, read labels confidently and
                    live a full, healthy and enjoyable life. You do not have to feel limited. You just need the
                    right information.
                </Paragraph>
            </BookSection>

            {/* Chapter 1 */}
            <BookSection>
                <ChapterHeading number={1}>Understanding Gluten Intolerance</ChapterHeading>

                <SubHeading>What is gluten?</SubHeading>
                <Paragraph>
                    Gluten is a protein found in wheat, barley and rye. For most people it causes no problems.
                    But for those with celiac disease or gluten sensitivity, consuming gluten triggers a
                    reaction that can cause serious damage to the digestive system and overall health.
                </Paragraph>

                <SubHeading>What is celiac disease?</SubHeading>
                <Paragraph>
                    Celiac disease is an autoimmune condition. When someone with celiac disease eats gluten,
                    their immune system attacks the lining of the small intestine. Over time this damages the
                    villi, the tiny finger-like structures that absorb nutrients, leading to malnutrition and a
                    wide range of symptoms.
                </Paragraph>

                <SubHeading>What is non-celiac gluten sensitivity?</SubHeading>
                <Paragraph>
                    This is a condition where a person experiences symptoms similar to celiac disease after
                    eating gluten but does not have the intestinal damage or the antibodies associated with
                    celiac disease. The symptoms are real and can be just as disruptive to daily life.
                </Paragraph>

                <SubHeading>Common symptoms of gluten intolerance</SubHeading>
                <BulletList items={[
                    'Bloating and gas',
                    'Abdominal pain and cramping',
                    'Diarrhea or constipation',
                    'Fatigue and brain fog',
                    'Headaches',
                    'Joint pain',
                    'Skin rashes',
                    'Mood changes and anxiety',
                    'Nutrient deficiencies',
                ]} />

                <SubHeading>Foods that contain gluten</SubHeading>
                <BulletList items={[
                    'Wheat in all forms including bread, pasta, flour, couscous, semolina and spelt',
                    'Barley including malt, malt vinegar and barley flour',
                    'Rye including rye bread and rye crackers',
                    'Many processed foods including soups, sauces, salad dressings, beer and even some medications',
                ]} />

                <SubHeading>Hidden sources of gluten to watch out for</SubHeading>
                <BulletList items={[
                    'Soy sauce and teriyaki sauce',
                    'Oats that are not certified gluten-free',
                    'Imitation meats and seafood',
                    'Seasoning packets and spice blends',
                    'Some chips and snacks',
                    'Licorice candy',
                    'Some vitamins and supplements',
                ]} />

                <SubHeading>Safe gluten-free alternatives</SubHeading>
                <BulletList items={[
                    'Rice flour', 'Almond flour', 'Coconut flour', 'Tapioca starch', 'Potato starch',
                    'Oat flour certified gluten-free', 'Chickpea flour', 'Buckwheat flour',
                    'Amaranth flour', 'Teff flour', 'Corn flour and cornmeal certified gluten-free', 'Quinoa',
                ]} />

                <SubHeading>Tips for living gluten-free</SubHeading>
                <BulletList items={[
                    'Always read food labels carefully. Look for certified gluten-free logos.',
                    'Be aware of cross-contamination in restaurants and shared kitchens.',
                    'Use separate cooking utensils, cutting boards and toasters at home.',
                    'When eating out, always inform your server about your condition.',
                    'Focus on naturally gluten-free whole foods such as fruits, vegetables, meats, fish, eggs, legumes and dairy alternatives.',
                ]} />
            </BookSection>

            {/* Chapter 2 */}
            <BookSection>
                <ChapterHeading number={2}>Understanding Lactose Intolerance</ChapterHeading>

                <SubHeading>What is lactose?</SubHeading>
                <Paragraph>
                    Lactose is a natural sugar found in milk and most dairy products. To digest lactose, the
                    body needs an enzyme called lactase. People with lactose intolerance do not produce enough
                    lactase to properly digest lactose, causing uncomfortable digestive symptoms.
                </Paragraph>

                <SubHeading>Is lactose intolerance the same as a dairy allergy?</SubHeading>
                <Paragraph>
                    No. A dairy allergy is an immune response to the proteins in milk and can be
                    life-threatening. Lactose intolerance is a digestive issue and while uncomfortable it is
                    not dangerous. However both conditions require avoiding dairy products.
                </Paragraph>

                <SubHeading>Common symptoms of lactose intolerance</SubHeading>
                <BulletList items={[
                    'Bloating',
                    'Gas',
                    'Stomach cramps',
                    'Diarrhea',
                    'Nausea',
                    'These symptoms usually appear 30 minutes to 2 hours after consuming dairy',
                ]} />

                <SubHeading>Foods that contain lactose</SubHeading>
                <BulletList items={[
                    'Milk from cows, goats and sheep',
                    'Cheese especially soft and processed cheeses',
                    'Butter and cream',
                    'Ice cream and frozen yogurt',
                    'Yogurt',
                    'Whey and casein found in many protein bars and supplements',
                    'Many baked goods, soups and sauces made with milk or butter',
                ]} />

                <SubHeading>Hidden sources of lactose</SubHeading>
                <BulletList items={[
                    'Bread and baked goods',
                    'Breakfast cereals',
                    'Instant mashed potatoes',
                    'Some margarines',
                    'Processed meats like hot dogs and deli meats',
                    'Salad dressings',
                    'Medications and supplements that use lactose as a filler',
                ]} />

                <SubHeading>Safe dairy-free alternatives</SubHeading>
                <BulletList items={[
                    'Almond milk', 'Coconut milk and coconut cream', 'Oat milk certified gluten-free',
                    'Rice milk', 'Cashew milk', 'Soy milk', 'Coconut oil instead of butter',
                    'Dairy-free yogurt made from coconut or almond milk',
                    'Dairy-free cheese made from nuts or soy',
                    'Dairy-free chocolate and ice cream',
                ]} />

                <SubHeading>Tips for living dairy-free</SubHeading>
                <BulletList items={[
                    'Read labels carefully. Lactose hides in many unexpected places.',
                    'Look for labels that say dairy-free, non-dairy or vegan for safer options.',
                    'Coconut milk is an excellent substitute in cooking and baking.',
                    'Many people who are lactose intolerant can tolerate hard aged cheeses and butter in small amounts. But this varies from person to person.',
                    'Keep a food diary to identify exactly which dairy products trigger your symptoms.',
                ]} />
            </BookSection>

            {/* Chapter 3 */}
            <BookSection>
                <ChapterHeading number={3}>Understanding Diabetes</ChapterHeading>

                <SubHeading>What is diabetes?</SubHeading>
                <Paragraph>
                    Diabetes is a chronic condition that affects how the body processes blood sugar, also called
                    glucose. Glucose comes from the food we eat and is the main source of energy for the body.
                    Insulin, a hormone made by the pancreas, helps glucose enter the cells to be used for
                    energy.
                </Paragraph>

                <SubHeading>Types of diabetes</SubHeading>
                <div className="space-y-3 my-3">
                    {[
                        { label: 'Type 1 Diabetes', desc: 'The body does not produce insulin at all. It is an autoimmune condition and requires daily insulin injections or a pump. It is not caused by diet or lifestyle.' },
                        { label: 'Type 2 Diabetes', desc: 'The body either does not produce enough insulin or does not use it effectively. It is the most common form of diabetes and is strongly influenced by diet, physical activity and lifestyle.' },
                        { label: 'Prediabetes', desc: 'Blood sugar levels are higher than normal but not yet high enough to be diagnosed as type 2 diabetes. This is a critical window where lifestyle changes can prevent or delay the progression to type 2.' },
                        { label: 'Gestational Diabetes', desc: 'Diabetes that develops during pregnancy and usually resolves after delivery, though it increases the risk of developing type 2 diabetes later in life.' },
                    ].map(({ label, desc }) => (
                        <div key={label} className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                            <p className="font-bold text-[#006064] text-sm mb-1">{label}</p>
                            <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                <SubHeading>Common symptoms of diabetes</SubHeading>
                <BulletList items={[
                    'Frequent urination', 'Excessive thirst', 'Unexplained weight loss', 'Fatigue',
                    'Blurred vision', 'Slow-healing wounds', 'Frequent infections',
                    'Numbness or tingling in hands and feet',
                ]} />

                <SubHeading>Foods to limit or avoid with diabetes</SubHeading>
                <BulletList items={[
                    'White bread, white rice and white pasta',
                    'Sugary drinks including soda, juice and energy drinks',
                    'Candy, pastries and desserts with added sugar',
                    'Processed snack foods',
                    'Foods high in saturated and trans fats',
                    'Alcohol',
                    'Sweetened cereals',
                    'Flavored yogurts with added sugar',
                ]} />

                <SubHeading>Foods that are diabetes-friendly</SubHeading>
                <BulletList items={[
                    'Non-starchy vegetables such as spinach, broccoli, peppers, zucchini and cauliflower',
                    'Lean proteins including chicken, turkey, fish, eggs and legumes',
                    'Healthy fats from avocado, olive oil, nuts and seeds',
                    'Whole grains that are gluten-free such as quinoa, brown rice and oats',
                    'Low glycemic fruits such as berries, apples, pears and cherries',
                    'Unsweetened almond milk and coconut milk',
                ]} />

                <SubHeading>Understanding the glycemic index</SubHeading>
                <Paragraph>
                    The glycemic index or GI measures how quickly a food raises blood sugar. Low GI foods cause
                    a slow, steady rise in blood sugar while high GI foods cause a rapid spike.
                </Paragraph>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                        <p className="font-bold text-green-700 text-sm mb-2">✅ Low GI — Favor These</p>
                        <p className="text-stone-600 text-sm leading-relaxed">Most vegetables, legumes, nuts, seeds, most fruits, oats and barley.</p>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                        <p className="font-bold text-red-700 text-sm mb-2">⚠️ High GI — Limit These</p>
                        <p className="text-stone-600 text-sm leading-relaxed">White bread, white rice, potatoes, sugary foods and drinks.</p>
                    </div>
                </div>

                <SubHeading>Tips for managing diabetes through diet</SubHeading>
                <BulletList items={[
                    'Eat regular meals at consistent times to keep blood sugar stable.',
                    'Control portion sizes. Even healthy foods can raise blood sugar if eaten in large amounts.',
                    'Combine carbohydrates with protein and healthy fats to slow glucose absorption.',
                    'Stay well hydrated. Drink mostly water.',
                    'Limit processed and packaged foods.',
                    'Read nutrition labels and pay attention to total carbohydrates and added sugars.',
                    'Exercise regularly. Physical activity helps the body use insulin more effectively.',
                    'Monitor your blood sugar regularly and keep track of how different foods affect your levels.',
                    'Work closely with your doctor or a registered dietitian for personalized guidance.',
                ]} />
            </BookSection>

            {/* Chapter 4 */}
            <BookSection>
                <ChapterHeading number={4}>Reading Food Labels</ChapterHeading>

                <SubHeading>How to read a nutrition label</SubHeading>
                <div className="space-y-2 my-3">
                    {[
                        { n: '1', text: 'Start with the serving size. All the information on the label is based on this amount.' },
                        { n: '2', text: 'Check total carbohydrates. This is key for diabetes management. Look at total carbs, dietary fiber and added sugars separately.' },
                        { n: '3', text: 'Look at added sugars. The less the better. Zero added sugars is ideal.' },
                        { n: '4', text: "Check the ingredients list. Ingredients are listed from most to least by weight. If sugar or any form of sweetener is in the first three ingredients, the product is high in sugar." },
                        { n: '5', text: 'Look for allergen warnings. Labels must state if the product contains wheat, milk or other major allergens.' },
                    ].map(({ n, text }) => (
                        <div key={n} className="flex gap-3 items-start">
                            <span className="mt-0.5 w-6 h-6 rounded-full bg-[#006064] text-white text-xs font-bold flex items-center justify-center shrink-0">{n}</span>
                            <p className="text-stone-600 text-sm leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>

                <SubHeading>Words that mean gluten on a label</SubHeading>
                <BulletList items={[
                    'Wheat, wheat starch, wheat germ, wheat bran',
                    'Barley, malt, malt extract, malt vinegar',
                    'Rye',
                    'Spelt, kamut, triticale, durum, semolina, farro',
                    'Modified food starch (unless labeled gluten-free)',
                    'Hydrolyzed wheat protein',
                ]} />

                <SubHeading>Words that mean dairy on a label</SubHeading>
                <BulletList items={[
                    'Milk, cream, butter, ghee',
                    'Cheese, casein, caseinate',
                    'Whey, whey protein, lactalbumin, lactoglobulin',
                    'Lactose, lactic acid (may indicate dairy)',
                    'Curds, milk solids, milk powder',
                ]} />

                <SubHeading>Words that mean sugar on a label</SubHeading>
                <BulletList items={[
                    'Sugar, cane sugar, brown sugar, beet sugar',
                    'High fructose corn syrup, corn syrup',
                    'Honey, agave, maple syrup, molasses',
                    'Dextrose, glucose, fructose, sucrose, maltose',
                    'Fruit juice concentrate',
                    'Evaporated cane juice',
                ]} />
            </BookSection>

            {/* Chapter 5 */}
            <BookSection>
                <ChapterHeading number={5}>Meal Planning Tips</ChapterHeading>

                <SubHeading>Building a balanced plate</SubHeading>
                <Paragraph>
                    A simple and effective way to plan your meals is to divide your plate as follows.
                </Paragraph>
                <div className="space-y-2 my-3">
                    {[
                        { color: 'bg-green-500', label: '½ plate', text: 'Non-starchy vegetables — salad, broccoli, spinach, cauliflower, green beans, zucchini or peppers.' },
                        { color: 'bg-orange-400', label: '¼ plate', text: 'Lean protein — grilled chicken, fish, turkey, eggs, tofu or legumes.' },
                        { color: 'bg-amber-400', label: '¼ plate', text: 'Complex gluten-free carbs — brown rice, quinoa, sweet potato or gluten-free oats.' },
                        { color: 'bg-[#006064]', label: 'Small serving', text: 'Healthy fat — half an avocado, a drizzle of olive oil or a handful of nuts.' },
                    ].map(({ color, label, text }) => (
                        <div key={label} className="flex gap-3 items-start">
                            <span className={`mt-1 w-3 h-3 rounded-full shrink-0 ${color}`} />
                            <p className="text-stone-600 text-sm leading-relaxed">
                                <span className="font-bold text-stone-800">{label}: </span>{text}
                            </p>
                        </div>
                    ))}
                </div>

                <SubHeading>Sample daily meal plan</SubHeading>
                <div className="space-y-3 my-3">
                    {[
                        {
                            meal: 'Breakfast',
                            items: ['Gluten-free oatmeal topped with fresh berries and a tablespoon of almond butter', 'Black coffee or unsweetened herbal tea'],
                        },
                        {
                            meal: 'Lunch',
                            items: ['Large salad with mixed greens, grilled chicken, avocado, cucumber and olive oil dressing', 'Side of brown rice or quinoa'],
                        },
                        {
                            meal: 'Afternoon Snack',
                            items: ['A small apple with almond butter', 'Or a handful of mixed nuts'],
                        },
                        {
                            meal: 'Dinner',
                            items: ['Baked salmon with roasted vegetables and quinoa', 'Sparkling water with lemon'],
                        },
                        {
                            meal: 'Dessert',
                            items: ['Chia seed pudding made with coconut milk and topped with blueberries'],
                        },
                    ].map(({ meal, items }) => (
                        <div key={meal} className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                            <p className="font-bold text-[#006064] text-sm mb-2">{meal}</p>
                            <ul className="space-y-1">
                                {items.map((item, i) => (
                                    <li key={i} className="text-stone-600 text-sm flex gap-2 items-start">
                                        <span className="text-[#006064] mt-0.5">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <SubHeading>Smart shopping tips</SubHeading>
                <BulletList items={[
                    'Shop the perimeter of the grocery store first. This is where you will find fresh produce, meats, fish and eggs.',
                    'Buy whole foods whenever possible and prepare meals at home.',
                    'Stock your pantry with gluten-free staples such as rice flour, almond flour, canned chickpeas, quinoa, canned fish and nut butters.',
                    'Read every label every time, even on products you have bought before. Manufacturers change ingredients.',
                    'Buy fresh or frozen fruits and vegetables rather than canned when possible to avoid added sugars and sodium.',
                ]} />
            </BookSection>

            {/* Chapter 6 */}
            <BookSection>
                <ChapterHeading number={6}>Eating Out with Confidence</ChapterHeading>

                <SubHeading>At restaurants</SubHeading>
                <BulletList items={[
                    'Call ahead or check the menu online before you go.',
                    'Tell your server clearly about your dietary restrictions. Do not be shy about it. Your health depends on it.',
                    'Ask how dishes are prepared and what ingredients are used.',
                    'Ask for sauces and dressings on the side.',
                    'Avoid fried foods as they are often cooked in shared fryers that may contain gluten.',
                    'Choose grilled, baked or steamed options.',
                    'Be aware that cross-contamination is a real risk in restaurant kitchens.',
                ]} />

                <SubHeading>Safe choices at most restaurants</SubHeading>
                <BulletList items={[
                    'Grilled fish or chicken with steamed vegetables',
                    'Salads with simple olive oil and vinegar dressing',
                    'Rice-based dishes without soy sauce',
                    'Soups made with clear broth without thickeners',
                    'Fresh fruit for dessert',
                ]} />

                <SubHeading>Traveling with dietary restrictions</SubHeading>
                <BulletList items={[
                    'Pack safe snacks for the journey such as nuts, seeds, fresh fruit and gluten-free bars.',
                    'Research restaurants at your destination in advance.',
                    'Consider booking accommodations with a kitchen so you can prepare some of your own meals.',
                    'Carry a card that explains your dietary restrictions in the local language if traveling abroad.',
                ]} />
            </BookSection>

            {/* Chapter 7 */}
            <BookSection>
                <ChapterHeading number={7}>Emotional Wellbeing &amp; Lifestyle</ChapterHeading>

                <SubHeading>Coping with dietary restrictions</SubHeading>
                <Paragraph>
                    It is completely normal to feel overwhelmed, frustrated or even sad when first diagnosed
                    with celiac disease, lactose intolerance or diabetes. Food is deeply connected to culture,
                    family and enjoyment. Giving up certain foods can feel like a loss.
                </Paragraph>
                <Paragraph>Here are some healthy ways to cope:</Paragraph>
                <BulletList items={[
                    'Focus on what you can eat, not what you cannot. There are thousands of delicious naturally gluten-free, dairy-free and sugar-free foods available to you.',
                    'Find your community. Connect with others who share your condition through online groups, social media communities and local support groups. You are not alone.',
                    'Celebrate progress. Every gluten-free meal you cook, every label you read, every healthy choice you make is a victory.',
                    'Be patient with yourself. Adjusting to a new way of eating takes time. Mistakes will happen and that is okay.',
                ]} />

                <SubHeading>The importance of regular medical care</SubHeading>
                <BulletList items={[
                    'Visit your doctor regularly and get the recommended blood tests to monitor your condition.',
                    'For celiac disease, regular check-ups ensure your intestines are healing properly.',
                    'For diabetes, monitor your blood sugar as recommended by your doctor and get regular HbA1c tests.',
                    'Work with a registered dietitian who specializes in your condition for personalized meal planning.',
                ]} />

                <SubHeading>The role of exercise</SubHeading>
                <Paragraph>
                    Regular physical activity benefits everyone but is especially important for people with
                    diabetes and gluten-related conditions. Exercise helps lower blood sugar levels, improves
                    insulin sensitivity, reduces inflammation, boosts energy and mood and supports a healthy
                    weight.
                </Paragraph>
                <Paragraph>
                    Aim for at least 30 minutes of moderate exercise most days of the week. Walking, swimming,
                    cycling and yoga are all excellent options that require no special equipment.
                </Paragraph>
            </BookSection>

            {/* Final Message */}
            <div
                className="rounded-2xl p-8 text-white text-center shadow-xl mt-4"
                style={{
                    background: 'linear-gradient(135deg, #004d40 0%, #006064 50%, #00838f 100%)',
                }}
            >
                <p className="text-lg font-bold mb-4 opacity-90 uppercase tracking-wider text-xs">Final Message</p>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                    Living with gluten intolerance, lactose intolerance or diabetes is a lifelong journey, not
                    a temporary challenge. The good news is that with the right knowledge, the right tools and
                    the right mindset, you can live a full, vibrant and delicious life.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                    The recipes in this book were created with you in mind. Every single one is free of gluten,
                    free of dairy and sugar is always optional. Because you deserve food that nourishes your
                    body AND satisfies your soul.
                </p>
                <p className="text-base md:text-lg font-semibold">
                    You have taken a powerful step by investing in your health. Keep going. You are doing
                    amazing.
                </p>
                <div className="mt-6 text-2xl">🌿</div>
                <p className="mt-2 font-bold tracking-wide">Happy and healthy cooking!</p>
            </div>

            {/* Download button */}
            <div className="mt-8 flex flex-col items-center gap-3">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={downloadGuide}
                    style={{ backgroundColor: BRAND_COLOR }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                    <Download size={20} />
                    <span>Download Essential Guide (PDF)</span>
                </motion.button>
                <p className="text-stone-500 text-sm max-w-sm text-center">
                    Want it on paper? Download and print your full guide at home.
                </p>
            </div>
        </motion.div>
    );
};

/* ── Small composable primitives ── */

const BookSection = ({ children }: { children: React.ReactNode }) => (
    <section className="bg-white rounded-2xl shadow-sm border border-stone-100 px-6 py-8 mb-6 space-y-1">
        {children}
    </section>
);

const ChapterHeading = ({ number, children }: { number: number; children: React.ReactNode }) => (
    <div className="mb-5">
        <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-1"
            style={{ color: '#006064' }}
        >
            Chapter {number}
        </span>
        <h2 className="text-xl md:text-2xl font-extrabold text-stone-900 leading-snug">{children}</h2>
        <div className="mt-2 w-10 h-1 rounded-full" style={{ backgroundColor: '#006064' }} />
    </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-4">
        <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-1"
            style={{ color: '#006064' }}
        >
            {children}
        </span>
        <div className="mt-1 w-8 h-1 rounded-full" style={{ backgroundColor: '#006064' }} />
    </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-base font-bold text-stone-800 mt-5 mb-1">{children}</h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-stone-600 text-sm leading-relaxed">{children}</p>
);

const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-1.5 my-2">
        {items.map((item, i) => (
            <li key={i} className="text-stone-600 text-sm flex gap-2 items-start leading-relaxed">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#006064]" />
                {item}
            </li>
        ))}
    </ul>
);
