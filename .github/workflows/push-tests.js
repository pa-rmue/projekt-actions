import { Selector } from 'testcafe';

fixture`push-tests`
    .page`http://localhost:4200`;

test('congrats exists', async t => {
    await t.expect(Selector('p').withText('Congratulations!').exists).ok();
});