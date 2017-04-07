<template>
  <div>
    <ParkNav />
    <ParkContent />
    <ParkFooter />
  </div>
</template>

<script>
import ParkNav from '@/components/nav'
import ParkContent from '@/components/content-tab'
import ParkFooter from '@/components/footer'
export default {
  components: {
    ParkNav,
    ParkContent,
    ParkFooter
  }
}
</script>
