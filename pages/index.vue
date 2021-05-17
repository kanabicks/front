<template>
<div>
    <v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <h1>Main Division</h1>
  <v-simple-table class="mt-3">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Command
          </th>
          <th class="text-left">
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  <v-divider></v-divider>
  <h1>About Our League</h1>
<v-alert
      class="mt-4"
      color=""
      dark
      icon="mdi-vuetify"
      border="left"
      prominent
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus totam in, tempora similique provident fuga sed, quod dolorum doloremque dolor saepe perspiciatis! Quae voluptate veritatis ducimus voluptates iure, minima deserunt numquam ad tempore labore modi! Adipisci hic amet aliquam doloribus delectus ut ea dicta reiciendis atque, dolorem asperiores quasi eos tempora labore perspiciatis, harum veniam mollitia expedita consectetur molestias? Maxime soluta cupiditate illum autem tempore sunt explicabo eius consequuntur temporibus quis aspernatur ut, saepe provident unde distinctio deleniti suscipit veniam nisi excepturi mollitia. Vitae consectetur architecto eos, minima error modi dolorum? Totam aliquam voluptatum at pariatur, harum eos dolores id adipisci odit enim exercitationem omnis repudiandae magnam? Dolor maiores voluptates excepturi et sunt esse dignissimos unde, voluptate voluptatem eaque voluptatum aliquam. Ea quas id voluptas velit error harum! Deleniti, beatae esse porro sapiente veniam impedit id error corrupti laboriosam, ipsum in? Accusamus modi distinctio aliquam. Debitis delectus, accusamus fugit saepe repellat quisquam rerum officia incidunt cum nisi ipsa quia consequuntur sit quam iure necessitatibus aliquam sed minus dolores veniam porro natus! Esse eum corrupti odio rem voluptates recusandae cum, quisquam quia culpa incidunt saepe delectus pariatur suscipit tenetur et exercitationem excepturi dignissimos ratione sit nam repellat minima consectetur quos? Asperiores in quibusdam fugiat repellat ipsam alias accusamus ipsa quaerat tempore sit esse quia quae, minus, eum quod eveniet culpa quos ut. Dolorem doloremque itaque quo ad suscipit blanditiis, maiores commodi id nisi repellat aperiam quis quae consequuntur similique beatae dolore accusantium. Numquam, odit beatae iusto voluptatibus facilis dolor fugit obcaecati omnis quos nam illo repellat ducimus eligendi dicta dolores ut porro veritatis atque amet, dolorem repudiandae aperiam corrupti, aliquam nisi! Iure, expedita. Ad eos eveniet at repellat consectetur sapiente, odio, voluptatem, quod maxime deserunt reiciendis! Voluptate ipsa aperiam, quas dolorem modi ducimus nisi fugiat nemo dolorum expedita. Rem incidunt ut excepturi error quisquam, eum nostrum nam ullam, corporis aperiam, explicabo saepe nisi veniam fugit amet voluptatibus! Vitae incidunt voluptate impedit neque, consequuntur provident dolorem aliquam voluptatibus ad obcaecati assumenda itaque accusamus ipsa soluta adipisci. Illum esse architecto consequatur praesentium quia soluta neque natus deserunt necessitatibus, quod et voluptates tenetur ipsam mollitia, quis magnam voluptatem ut hic distinctio, odio quaerat odit voluptas. Officiis voluptatem hic nostrum aliquam, error omnis sint! Doloribus dicta sit optio amet accusantium quaerat autem sed non consequatur sapiente minima soluta pariatur maxime, doloremque dolore ea impedit harum atque quos iure omnis, aperiam repellat ipsum. Sunt recusandae ipsa eos, quisquam ipsam deleniti accusantium similique optio perspiciatis alias odio fugiat deserunt aperiam adipisci pariatur quia. Exercitationem amet possimus consequuntur excepturi, reiciendis veritatis accusamus in neque commodi, at aliquid beatae dolorum, eligendi alias. Totam, dicta! Vero tempore odio earum voluptate fuga. Magnam quas, maxime, eum harum sequi perspiciatis iusto adipisci modi non molestiae voluptatem aperiam, error accusantium qui cumque laudantium magni fuga ad. Praesentium commodi laborum voluptates similique labore cumque facilis aliquid ipsum provident unde corrupti ipsa, nesciunt ut blanditiis quibusdam fuga minus sapiente officia aut explicabo? Dignissimos recusandae iure reprehenderit odit quas voluptate perferendis nam quos molestias sunt.
    </v-alert>

  
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
      model: 0,
      colors: [
        'dark',
        'white darken-3',
        'yellow darken-2',
        'red',
        'orange',
      ],
        desserts: [
          {
            name: 'Jupiter',
            calories: 228,
          },
          {
            name: 'Black pearl',
            calories: 227,
          },
          {
            name: 'Haliky',
            calories: 211,
          },
          {
            name: 'Gaik',
            calories: 200,
          },
          {
            name: '13shka',
            calories: 199,
          },
          {
            name: 'Telegi',
            calories: 180,
          }
        ],
        show: false,
    }),
}
</script>
