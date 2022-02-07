import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    test('Debe ser igual a la captura' , () => {

        const wrapper = shallowMount(Counter)

        expect(wrapper.html()).toMatchSnapshot()
    })
})