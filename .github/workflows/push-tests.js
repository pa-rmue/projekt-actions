import { Selector } from 'testcafe';

fixture`push-tests`
    .page`http://localhost:4200`;

test('congrats exists', async t => {
    await t.expect(Selector('p', { timeout: 10000 }).withText('Congratulations!').exists).ok();
}).timeouts({
    pageLoadTimeout: 100000,
    pageRequestTimeout : 100000,
});