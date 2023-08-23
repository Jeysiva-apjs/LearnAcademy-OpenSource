import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MpBmMGstaqFFUpmyTnAqhlILumCDh6Hubc7JJBbwrG5hl81lsji9mnJgGzF1Fnv2IXg0M6cUpqV6g7c77kSkIu900QritLMtS');

export default stripePromise;
